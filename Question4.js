/* Write a program that reads in (from standard input) the length of a movie in 
hours, minutes, and seconds. The program should calculate and write out 
(to standard output) the length of the movie in seconds.
 */

function convertTime(num)
 { 
  var minutes = Math.floor(num / 60);  
  var seconds = num % 60;
  return minutes + ":" + seconds;         
}

console.log(convertTime(1800));
