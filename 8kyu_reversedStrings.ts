// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str: string): string {
  return Array.from(str).reverse().join('').toString();
}
