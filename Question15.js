/*Write a JavaScript program to filter out the element(s) of a given array, that has one of 
the specified values.
 */

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));

