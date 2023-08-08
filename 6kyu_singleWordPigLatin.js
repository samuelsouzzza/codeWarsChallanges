// DESCRIPTION:
// Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

// So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

// The rules themselves are rather easy:

// The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

// The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

// The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

// The function must also handle simple random strings and not just English words.

// The input string has no vowels -> return the original string plus "ay".

// For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.

function pigLatin(word){
  if (/^[a-zA-Z]*$/.test(word)) {
    const vogs = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let consonants = '';

    const arrWord = word.split('');

    if (arrWord instanceof Array) {
    
      function handleEvery(element) {
        return !vogs.includes(element);
      }

      if (arrWord.every(handleEvery)) return word.toLowerCase() + 'ay';
      if (vogs.includes(arrWord[0])) return word.toLowerCase() + 'way';

      for (let w of arrWord) {
        if (!vogs.includes(w)) {
          consonants += w;
        } else {
          arrWord.splice(0, arrWord.indexOf(w));
          break;
        }
      }
    }

    return arrWord.join('').toLowerCase() + consonants.toLowerCase() + 'ay';
  } else return null;

}
