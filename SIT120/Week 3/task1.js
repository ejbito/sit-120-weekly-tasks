// first letter of a string
let helloWorld = 'Hello World!';
let result = helloWorld.charAt(0);
console.log('The first index of the string is ' + result);

// return length of string
let stringLength = "Testing the length of this string!"
result = stringLength.length;
console.log('The total length of this string is ' + result);

// uppercase and lowercase strings
let uppercase = 'This is in uppercase';
let lowercase = 'This is in lowercase';

let testUpper = uppercase.toUpperCase();
let testLower = lowercase.toLowerCase();

console.log(testUpper + ' and ' + testLower);

// extracting chars in strings between 2 indices
result = helloWorld.substring(1, 4);
console.log('Hello World! is now ' + result);

// for loop printing each character
result = 'Hello World!';

for (let i = 0; i < result.length; i++)
{
    console.log(result[i]);
}