/*Write a program that reads in (from standard input) the length of a movie in 
hours and minutes. The program should calculate and write out (to standard output)
 the length of the movie in minutes.
 */

function convertTime(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(convertTime(350));

