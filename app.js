// 1.	Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

// let userNum1 = prompt("Enter the first number");
// let userNum2 = prompt("Enter the first number");
// if (userNum1 > userNum2) {
//   console.log(userNum1 + " is larger than  " + userNum2);
// } 
// else if (userNum2 > userNum1) {
//   console.log(userNum2 + " is larger than " + userNum1);
// } 
// else {
//   console.log("Both numbers are equal");
// }

// 2.	Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// let userNum = prompt("Enter a number:"); 
// if (userNum > 0) {
//   alert( " The sign of number "  + userNum + " is +");
// } 
// else if (userNum < 0) {
//     alert( " The sign of number "  + userNum + " is -");
// } 
// else {
//   alert(userNum+  " is neither positive nor negative");
// }

// 3.	Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console.

// let userNum1 = Number(prompt("Enter the first number:"));
// let userNum2 = Number(prompt("Enter the second number:"));
// let userNum3 = Number(prompt("Enter the third number:"));
// let userNum4 = Number(prompt("Enter the fourth number:"));
// let userNum5 = Number(prompt("Enter the fifth number:"));
// let largest = userNum1;
// if (userNum2 > largest) {
//   largest = userNum2;
// }
// if (userNum3 > largest) {
//   largest = userNum3;
// }
// if (userNum4 > largest) {
//   largest = userNum4;
// }
// if (userNum5 > largest) {
//   largest = userNum5;
// }
// console.log("The largest number is: " + largest);

// 4.	Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }

// 5.	Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
// The grades are computed as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A

// const Input = prompt("Enter your number:");
// if (Input < 100) {
//   grade = "A";
// } else if (Input < 90) {
//   grade = "B";
// } else if (Input < 80) {
//   grade = "C";
// } else if (Input < 70) {
//   grade = "D";
// } else if (Input < 60) {
//   grade = "F";
// } 
// alert("Your grade is " + grade);

// 6.	Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// 7.	Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// *	*
// *	* *
// *	* * *
// *	* * * *

let  x, y, z;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    z = z + (" * ");        
      }
 console.log(z);
 z = '';    
}