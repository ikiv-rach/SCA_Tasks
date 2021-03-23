/*Write a program that reads in (from standard input) a price of an item of 
clothing in dollars and then write standard output how much the price would be
 if that item was at a 10% discount.*/


 getPrice = function() {
    var numVal1 = Number(document.getElementById("price").value);
    var numVal2 = Number(document.getElementById("discount").value) / 100;
  
    var totalValue = numVal1 - (numVal1 * numVal2)
    document.getElementById("total").value = totalValue.toFixed(2);
  }