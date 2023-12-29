// DESCRIPTION:
// A onda (conhecida como onda mexicana no mundo de língua inglesa fora da América do Norte) é um exemplo de ritmo metacrônico alcançado em um estádio lotado quando grupos sucessivos de espectadores se levantam brevemente, gritam e levantam os braços. Imediatamente após esticar-se até a altura total, o espectador retorna à posição sentada habitual.
// O resultado é uma onda de espectadores em pé que viaja através da multidão, mesmo que os espectadores individuais nunca se afastem dos seus assentos. Em muitas arenas grandes, a multidão fica sentada em um circuito contíguo ao redor do campo esportivo, e assim a onda é capaz de viajar continuamente pela arena; em arranjos de assentos descontíguos, a onda pode, em vez disso, refletir para frente e para trás na multidão. Quando a lacuna entre os assentos é estreita, a onda às vezes pode passar por ela. Normalmente, apenas uma crista de onda estará presente em um determinado momento em uma arena, embora ondas simultâneas e em contra-rotação tenham sido produzidas. (Fonte Wikipédia )

// Tarefa
// Neste Kata simples sua tarefa é criar uma função que transforme uma string em uma Onda Mexicana. Você receberá uma string e deverá retorná-la em um array onde uma letra maiúscula representa uma pessoa em pé. 

// Regras
// 1. A string de entrada sempre estará em minúsculas, mas pode estar vazia.
// 2. Se o caractere na string for um espaço em branco, passe sobre ele como se fosse um lugar vazio

// Exemplo
// wave("hello") => {"Hello", "hEllo", "heLlo", "helLo", "hellO"}

export function wave(str: string): Array<string>{
  const arrWave: string[] = [];

  str.split('').forEach((s, i) => {
    if (s === ' ') return;
    arrWave.push(str.substring(0, i) + s.toUpperCase() + str.substring(i + 1));
  });

  return arrWave;
}
