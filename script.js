// Question: 01 Write a JavaScript function that reverse a number.
// code:
// function reverse() {
//     var num;
//     num = prompt("enter your number to reverse it.");
//     num = num.toString();
//     num = num.split('');
//     num = num.reverse('');
//     num = num.join('');
//     num = parseInt(num);
//     alert(num);
// }
// reverse();

// Question: 02 Write a JavaScript function that checks whether a passed string is palindrome or not?
// code:
// function palindrome() {
//     var num;
//     num = prompt("enter your number to checks whether a passed string is palindrome or not ");
//     num2 = num.toString();
//     num2 = num2.split('');
//     num2 = num2.reverse('');
//     num2 = num2.join('');
//     if (num == num2) {
//         alert(num + " is palindrome");
//     }
//     else {
//         alert("this is not palindrome");
//     }
// }
// palindrome();

// Question: 03 Write a JavaScript function that generates all combinations of a string.
// code:
// function combination() {
//     var input = prompt("enter your string");
//     var result = [];
//     for (var i = 0; i < input.length; i++) {
//         for (var j = i + 1; j < input.length + 1; j++) {
//             result.push(input.slice(i, j));
//         }
//     }
//     alert(result);
// }
// combination();

// Question: 04 Write a JavaScript function that returns a passed string with letters in alphabetical order.
// code:
// function sort() {
//     var str = prompt("enter your string");
//     var result;

//     str = str.split('');
//     str = str.sort();
//     result = str.join('');

//     document.write(result);
// }

// sort();

// Question: 05 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// code:
// function upper(str) {

//     str = str.split('');

//     str[0] = str[0].toUpperCase();
//     for (var i = 0; i < str.length; i++) {

//         if (str[i] == undefined || str[i] == ' ') {

//             str[i + 1] = str[i + 1].toUpperCase();
//         }
//     }
//     str = str.join('');
//     document.write(str);
// }
// upper('the quick brown fox');

// Question:06 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// code:
// function longest(){
//     var str = prompt("Enter a String to find a longest word");
//     var longest;
//     str = str.split(' ');

//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < str.length; j++) {
//             if (str[i].length < str[j].length) {
//                 longest = str[j];

//             }

//         }
//     }
//     document.write(longest);
// }

// longest();


// Question: 07 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// code:
// function vowel() {
//     var str = prompt("enter your string");
//     var result;
//     var count = 0;

//     var vowel = "aeiouAEIOU";

//     for (var i = 0; i < str.length; i++) {
//         if (vowel.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     document.write(count);
// }
// vowel();


// Question: 08 Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// code:
// function prime(num) {
//     if (num == 1  || num == 2) {
//         document.write(num + " is not a prime number");
//     }
//     else if (num < 1) {
//         document.write(num + " is not a prime number because any negative number or zero is not a prime number");
//     }
//     else {
//         for (var i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 document.write(num + " is not a prime number");
//             }
//             else {
//                 document.write(num + " is a prime number");
//             }
//             break;
//         }
//     }
// }
// var num = prompt("enter your number to whether it is prime or not")
// prime(num);


// Question: 09  Write a JavaScript function which accepts an argument and returns the type.
// code:






// Question: 10 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// code:
// function second(){
//     var num = [9, 8, 2, 3, 4, 5];
//     num = num.sort();
//     var secondLowest = num[1];
//     var secondGreatest = num[num.length - 2];
//     var list = [];
//     list.push(secondLowest)
//     list.push(secondGreatest);
//     document.write(list);
//     }
//     second();
