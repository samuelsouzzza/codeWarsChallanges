// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
   const phrase = string.split(' ');
  let reverse = '';

  phrase.forEach((word) => {
    if (word.length >= 5) {
      const arr = Array.from(word);

      for (let i = arr.length - 1; i >= 0; i--) {
        reverse += arr[i];

        if (i == 0) reverse += ' ';
      }
    } else {reverse += word + ' '}
  });

  return reverse.trimEnd();
}
