console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'John';
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log('Test - should say "Hello, name!"', helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
  // return firstNumber + secondNumber;
console.log('Test - should add firstNumber + secondNumber:', addNumbers(4, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - should multiply three numbers:', multiplyThree(3, 4, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( number > 0 ) {
    return true;
  }
  else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true:', isPositive(3));
console.log('isPositive - should say false:', isPositive(0));
console.log('isPositive - should say false:', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let animalsArray = ['birds', 'cats', 'dogs', 'fish'];
function getLast(animalsArray) {
  return animalsArray[animalsArray.length-1];
}
console.log('Test - last item of array:', getLast(animalsArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let value = 'snakes'
function find(value, animalsArray){
  for (let i = 0; i < animalsArray.length; i++) {
    if (animalsArray[i] === value) {
    return true;
    }
    else {
    return false;
    }
  }
}
console.log('Test - finding value in array:', find(value, animalsArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
return string.charAt(0) === letter;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function sumAll(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; sum += (numberArray[i++])); {
  return sum;
  }
}
console.log('Test - finding sum in array:', sumAll(numberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const numArray = [0, -3, -1, 4, 6, 8]
function allPositiveNumbers(numArray) {
  return newArray = numArray.filter((numArray) => numArray.length > 0);
}
console.log('Test - creating new positive array:', allPositiveNumbers(numArray), newArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// From codewars.com
// --> Define a function that takes an integer argument and 
// returns a logical value true or false depending on if the integer is a prime.
function isPrime(num) {
  //TODO
}

// *Console log function to inspect proper execution.
// Solution:
function isPrime(num) {
  for(let i = 2; i < num; i++)
  if(num % i === 0) return false;
  return num > 1;
}
console.log(isPrime(7));
