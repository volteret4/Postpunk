#!/usr/bin/env python3
"""Trocea el texto del ePub por capítulos y localiza la paginación impresa.

Uso: python3 -I tools/split.py <dir_txt> <spine> <dir_salida>

<dir_txt> contiene un .txt por fichero del ePub (convertido con pandoc) y
<spine> el orden de lectura. El ePub es un escaneo de la edición de Caja Negra
(2016): los números de página impresos quedan incrustados en el texto («op-9»,
líneas sueltas «16»). Se recogen en orden creciente y se escribe:

- <dir_salida>/NN.txt: un fichero por capítulo (00 prólogo, 01-22, 23 epílogo),
  con las marcas de página como líneas «[pág. N]», para leerlo.
- <dir_salida>/book.json: párrafos del libro (las líneas cortadas por el escaneo
  se vuelven a unir), cada uno con su capítulo y sus segmentos [página, texto];
  lo usa tools/refs.py para localizar las citas.
"""
import json
import re
import sys
from pathlib import Path

HEAD = re.compile(r'^(?:CAP[ÍI]TU ?LO ((?:\d ?)+)|PROLOGO|PRÓLOGO|EPÍLOGO|AGRADECIMIENTOS|INDICE)\s*$')
EPI = 'OQIC•Xd•I'                       # restos de la cabecera «EPÍLOGO» tras el OCR
NUM = re.compile(r'^\d(?: ?\d){0,2}$')
TRAIL = re.compile(r'^(.*?\S)([ -])(\d(?: ?\d){0,2})$')
END = re.compile(r'[.!?…"»”\'\]):]$')   # fin de frase: aquí termina el párrafo


def load(txt_dir, spine):
    lines = []
    for name in [l.strip() for l in open(spine) if l.strip()]:
        p = Path(txt_dir) / (Path(name).stem + '.txt')
        if p.exists():
            lines += [l.rstrip() for l in p.read_text().splitlines()]
    return [l.strip() for l in lines if l.strip() and not re.match(r'^\[Image \d+\]$', l.strip())]


def main(txt_dir, spine, out):
    out = Path(out)
    out.mkdir(parents=True, exist_ok=True)
    chap, page = None, 8
    by_chap, paras = {}, []
    cur = None                              # párrafo en construcción
    glue = False                            # la línea anterior acababa en «-N» (palabra partida)
    for s in load(txt_dir, spine):
        m = HEAD.match(s)
        if s == EPI or m:
            if s == 'INDICE':
                break
            chap = 23 if s == EPI or s.startswith('EP') else 0 if s.startswith('PR') else None if s.startswith('AGRA') else int(m.group(1).replace(' ', ''))
            cur = None
            continue
        # Número de página: línea suelta o pegado al final de la línea, siempre creciente.
        text, hyph = s, False
        if NUM.match(s) and page < int(s.replace(' ', '')) <= page + 3:
            page, text = int(s.replace(' ', '')), ''
        else:
            t = TRAIL.match(s)
            if t and page < int(t.group(3).replace(' ', '')) <= page + 3:
                page, text, hyph = int(t.group(3).replace(' ', '')), t.group(1), t.group(2) == '-'
        if chap is None:
            continue
        if text != s or not text:
            by_chap.setdefault(chap, []).append(f'[pág. {page}]')
        if not text:
            continue
        by_chap.setdefault(chap, []).append(text + ('-' if hyph else ''))
        if cur and cur['ch'] == chap:
            sep = '' if glue else ' '
            cur['segs'].append([page, sep + text])
        else:
            cur = {'ch': chap, 'segs': [[page, text]]}
            paras.append(cur)
        glue = hyph
        if END.search(text) and not hyph:
            cur = None
    for c, ls in by_chap.items():
        (out / f'{c:02d}.txt').write_text('\n\n'.join(ls) + '\n')
    (out / 'book.json').write_text(json.dumps(paras, ensure_ascii=False))
    for c in sorted(by_chap):
        pages = [int(x[6:-1]) for x in by_chap[c] if x.startswith('[pág.')]
        print(f'{c:02d}: {sum(len(l.split()) for l in by_chap[c])} palabras, págs. {pages[0]}-{pages[-1]}')
    print(f'{len(paras)} párrafos')


if __name__ == '__main__':
    main(*sys.argv[1:])
