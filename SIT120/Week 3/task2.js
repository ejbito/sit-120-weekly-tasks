// arrays
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let numbers = [10, 16, 7, 82, 23, 2];

// prints arrays
console.log('// -- Prints array -- //');
console.log(fruits);
console.log(numbers);

// findIndex method
console.log('// -- Find index method (fruits) -- //');
console.log(fruits.findIndex((fruit) => fruit === 'Orange'));
console.log(fruits.findIndex((fruit) => fruit === 'Kiwi'));

// indexOf method
console.log('// -- Index of method (fruits) -- //');
console.log('The index of Orange is ' + fruits.indexOf("Banana"));
console.log('The index of Mango is ' + fruits.indexOf("Mango"));

// pop method
console.log('// -- Pop method (fruits) -- //');;
console.log(fruits.pop());
console.log(fruits);

// push method
console.log('// -- Push method (numbers) -- //');
console.log(numbers.push(549));
console.log(numbers);

// sort method
console.log('// -- Sort method (numbers) -- //');
console.log(numbers.sort());