/*Write a program that reads in two numbers (from standard input) and then writes out 
the value of the smaller ones. */

function minimum3(){
  var num1 = document.getElementsByName('num1').value
  var num2 = document.getElementByName('num2').value;
  

  var num3 = Math.min(num1,num2);
  return num3;
}
  