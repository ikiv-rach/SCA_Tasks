/*Write a JavaScript program to get a random number in the specified range. */



const random_Number_In_Range = (min, max) => Math.random() * (max - min) + min;
console.log(random_Number_In_Range(2, 10)); 

