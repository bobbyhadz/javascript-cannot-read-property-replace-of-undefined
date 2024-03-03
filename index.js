// Cannot read properties of undefined (reading 'replace')

// EXAMPLE 1 - Initialize the variable to an empty string

const someVar = undefined;

const str = someVar || ''; // 👉️ ""

const result = str.replace('test', 'replacement');
console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using optional chaining (?.) to solve the error

// const str = undefined;

// const result = str?.replace('test', 'replacement') || '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using an `if` statement to solve the error

// const str = undefined;

// if (typeof str === 'string') {
//   const result = str.replace('test', 'replacement');
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Use the ternary operator to solve the error

// const str = undefined;

// const result =
//   typeof str === 'string'
//     ? str.replace('test', 'replacement')
//     : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 5 - Solve the error when working with arrays

// const arr = [];

// const result =
//   typeof arr?.[0] === 'string'
//     ? arr[0].replace('test', 'replacement')
//     : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 6 - Solve the error when working with classes

// class Person {
//   // ✅ Initialize to empty string
//   last = '';

//   // ✅ Initialize from parameters
//   constructor(first) {
//     this.first = first;
//   }

//   replaceFirst() {
//     return this.first.replace('test', 'replacement');
//   }

//   replaceLast() {
//     return this.last.replace('test', 'replacement');
//   }
// }

// const p1 = new Person('John');
// p1.replaceFirst();
// p1.replaceLast();
