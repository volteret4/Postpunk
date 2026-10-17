POSTPUNK.chapter({ n: 13, title: 'A toda velocidad: PiL y el auge y la caída del postpunk' });
POSTPUNK.add([
  { id: 'pil',
    note: '1979 es el gran año de PiL. «Death Disco», inspirada por la muerte de la madre de Lydon, con El lago de los cisnes torturado por Levene, es «el single más radical de todos los tiempos en haber alcanzado el Top 20». Metal Box (Navidad de 1979), tres maxis a 45 rpm en una lata de película, es «la obra maestra de PiL» y «la coronación de todo el postpunk»: la atmósfera del roots reggae y la sustracción del dub sin efectos de eco («Albatross», «Poptones», «Careering», «No Birds», «Radio 4»). Después llegan la paranoia y las drogas en Gunter Grove, la salida de Wobble (1980), Flowers of Romance (1981), puro estudio-como-instrumento y percusión tribal, el desastre del Ritz de Nueva York, la expulsión de Levene en 1983 y el regreso de Johnny Rotten a las canciones de los Sex Pistols.',
    artists: ['Martin Atkins', 'Richard Dudanski', 'Jeanette Lee', 'Nick Launay'],
    labels: ['The Manor', 'Townhouse Studios', 'Gunter Grove'],
    tracks: [
      { a: 'Public Image Ltd.', t: 'Death Disco', y: 1979, ess: 1 },
      { a: 'Public Image Ltd.', t: 'Memories', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Metal Box', y: 1979, ess: 1 },
      { a: 'Public Image Ltd.', t: 'Albatross', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Poptones', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Careering', y: 1979 },
      { a: 'Public Image Ltd.', t: 'No Birds', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Chant', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Radio 4', y: 1979 },
      { a: 'Public Image Ltd.', t: 'Paris au Printemps', y: 1980 },
      { a: 'Public Image Ltd.', t: 'Flowers of Romance', y: 1981, ess: 1 },
      { a: 'Public Image Ltd.', t: 'Under the House', y: 1981 },
      { a: 'Public Image Ltd.', t: 'Four Enclosed Walls', y: 1981 },
      { a: 'Public Image Ltd.', t: 'This Is Not a Love Song', y: 1983 },
      { a: 'Jah Wobble', t: 'The Legend Lives On... Jah Wobble in "Betrayal"', y: 1980 },
    ],
    refs: [
      { q: 'puede decirse que "Death Disco" sigue siendo, aún hoy, el single más radical de todos los tiempos' },
      { q: 'no solo la obra maestra de PiL, sino también la coronación de todo el postpunk' },
      { q: 'Lo más notable del disco es, en efecto, cómo PiL consiguió asimilar tanto la atmósfera apocalíptica del roots reggae' },
      { q: 'Mientras Metal Box había empujado los límites del rock hasta el extremo' },
      { q: 'La misantropía de Lydon alcanzó su lúgubre punto más bajo' },
    ] },
  { id: 'postpunk-oscuro', name: 'Postpunk sombrío de segunda generación', family: 'oscuro', start: 1979, end: 1983, place: 'Reino Unido',
    desc: 'Toda edad de oro fabrica su propio final: tras PiL y Joy Division surge un underground de bandas lúgubres (The Sound, Killing Joke) y la segunda edición del festival Futurama (1980) parece un Monsters of Rock angustiado, rebaños de muchachos en sobretodo gris tan uniformes como los fans de Iron Maiden. El pico de 1979 —Fear of Music, Metal Box, Unknown Pleasures, Setting Sons, Entertainment! en la lista de NME— es también el principio del declive.',
    artists: ['The Sound', 'Killing Joke', 'Futurama (festival)'],
    labels: ['Futurama (Leeds)'],
    tracks: [
      { a: 'Killing Joke', t: 'Killing Joke', y: 1980 },
      { a: 'The Sound', t: 'Jeopardy', y: 1980 },
      { a: 'The Jam', t: 'Setting Sons', y: 1979 },
    ],
    influences: ['joy-division', 'pil'],
    refs: [{ q: 'Tras los pasos de PiL y Joy Division surgió todo un nuevo underground de bandas lúgubres y sombrías' }] },
], 13);

// Otras canciones y discos citados en el capítulo (revisados con tools/mentions.py).
POSTPUNK.add([
  { id: 'pil', tracks: [{ a: 'Public Image Ltd.', t: 'Swan Lake', y: 1979 }, { a: 'Public Image Ltd.', t: 'Graveyard', y: 1979 }, { a: 'Public Image Ltd.', t: 'The Suit', y: 1979 }, { a: 'Public Image Ltd.', t: 'Bad Baby', y: 1979 }, { a: 'Public Image Ltd.', t: 'Socialist', y: 1979 }, { a: 'Public Image Ltd.', t: 'Phenagen', y: 1981 }, { a: 'Public Image Ltd.', t: 'Banging the Door', y: 1981 }, { a: 'Public Image Ltd.', t: 'Track 8', y: 1981 }, { a: 'Public Image Ltd.', t: 'Go Back', y: 1981 }, { a: 'Public Image Ltd.', t: 'Hymie\'s Him', y: 1981 }] },
], 13);
