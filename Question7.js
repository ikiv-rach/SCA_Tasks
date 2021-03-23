/*Write a program that reads in three different numbers and then writes out the value of the 
smallest one.
 */

function minimum3(){
    var num1 = document.getElementsByName('num1').value
    var num2 = document.getElementByName('num2').value;
    var num3 = document.getElementByName('num3').value;

    var num4 = Math.min(num1,num2,num3);
    return num4;
}
