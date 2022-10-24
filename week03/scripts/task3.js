/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2){
// Step 2: In the function, return the sum of the parameters number1 and number2
return parseFloat(number1) + parseFloat(number2); 
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
   let number1 = document.querySelector('#addend1').value;
   let number2 = document.querySelector('#addend2').value;
   let answer = add(number1, number2);

// Step 4: Assign the return value to an HTML form element with an ID of sum
   document.querySelector('#sum').value = answer;
   console.log(answer);
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2){
   return parseFloat(number1) - parseFloat(number2);}

function subtractNumbers() {
   let number1 = document.querySelector('#minuend').value;
   let number2 = document.querySelector('#subtrahend').value;
   let answer = subtract(number1,number2);

   document.querySelector("#difference").value = answer;
   console.log(answer);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
var multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(){
   let number1 = document.querySelector('#factor1').value;
   let number2 = document.querySelector('#factor2').value;
   let answer = multiply(number1,number2);

   document.querySelector("#product").value = answer;
   console.log(answer);
}
document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
var divide = (number1, number2) => number1/number2;

function divideNumbers(){
   let number1 = document.querySelector('#dividend').value;
   let number2 = document.querySelector('#divisor').value;
   let answer = divide(number1,number2);

   document.querySelector("#quotient").value = answer;
   console.log(answer);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.
// It all works!

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var today = new Date();
// Step 2: Declare a variable to hold the current year
var yyyy = today.getFullYear();
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
//This could be finished in one step, as above.
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = yyyy;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var numbs = Array.from(Array(26).keys()).slice(1);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numbs;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
var odds = numbs.filter((n) => n % 2 == 1);
document.querySelector('#odds').innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
var evens = numbs.filter((n) => n % 2 == 0);
document.querySelector('#evens').innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
var sum = numbs.reduce((previousValue, currentValue) => previousValue + currentValue);
document.querySelector('#sumOfArray').innerHTML = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
var multiplied = numbs.map(x => x * 2);
document.querySelector('#multiplied').innerHTML = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
var sumOfMultipled = numbs.map(x => x *2).reduce((previousValue, currentValue) => previousValue + currentValue);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipled;