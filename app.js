// ! CHAPTER # 17-20

// Question #01 Start
// var multArr = [[],[],[]];
// Question #01 End

// Question #02 Start
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(matrix[0].join(" ") + "<br>" + matrix[1].join(" ") + "<br>" + matrix[2].join(" "));
// Question #02 End

// Question #03 Start
// for (let i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }
// Question #03 End

// Question #04 Start
// var userInp = parseInt(prompt("Enter a number"));
// var length = parseInt(prompt("Enter length of table"));
// for (var i = 1; i <= length; i++) {
//   document.write(`${userInp} x ${i} = ${userInp * i} <br>`);
// }
// Question #04 End

// Question #05 Start
// var fruitsArr = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruitsArr.length; i++) {
//   document.write(`Element at index ${i} is ${fruitsArr[i]}<br>`);
// }
// Question #05 End

// Question #06 Start
// document.write("Counting : ");
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ",");
// }
// document.write("<br>Reverse Counting : ");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ",");
// }
// document.write("<br>Even Number : ");
// for (var i = 0; i <= 20; i++) {
//     //   document.write(i + ",");
//     if (i % 2 === 0) {
//         document.write(i + ",");
//     }
// }
// document.write("<br>Odd Number : ");
// for (var i = 0; i <= 20; i++) {
//     //   document.write(i + ",");
//     if (i % 2 != 0) {
//         document.write(i + ",");
//     }
// }
// document.write("<br>Series : ");
// for (var i = 1; i <= 20; i++) {
//     //   document.write(i + ",");
//     if (i % 2 === 0) {
//         document.write(i + "k ");
//     }
// }
// Question #06 End

// Question #07 Start
// var user = prompt("Welcome to Our Bakery\nWhat do you want to order?");
// var flag = false;
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i < arr.length; i++) {
//   if (user === arr[i]) {
//     document.write(arr[i] + " is available at index " + i);
//     flag = true;
//     break;
//   }
// }
// if(flag != true) {
//     document.write("We are sorry " + user + " is not available in our bakery");
// }
// Question #07 End

// Question #08 Start
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for (var i = 0; i < A.length; i++) {
//   if (A[i] > max) {
//     max = A[i];
//   }
// }
// document.write(`Numbers in Array : ${A}<br> The largest number in Array is : <b>${max}</b>`);
// Question #08 End

// Question #09 Start
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for (var i = 0; i <b A.length; i++) {
//   if (A[i] < max) {
//     max = A[i];
//   }
// }
// document.write(`Numbers in Array : ${A}<br> The smallest number in Array is : <b>${max}</b>`);
// Question #09 End

// Question #10 Start
// document.write("<b>Numbers which is Multiples of 5 In 1-100 </b><br>")
// for (var i = 1; i <= 100; i++) {
//     if(i % 5 === 0){
//         document.write(i + "<br>")
//     }
// }
// Question #10 End
