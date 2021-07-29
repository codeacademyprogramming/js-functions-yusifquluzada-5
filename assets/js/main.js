/*
    1. Reduces code duplication. DRY - Do not Repeat Yourself
    2. It simplifies Code Maintenance 
*/

// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(50, 50));

// sum(10, 20);
// sum(50, 30);
// sum(100, 25);
// const result = sum(10, 20);
// console.log(result);


// Function Declaration
// function substract (a, b) {
//     return a - b;
// }

// substract(100, 23);

// Function Expression
// const divide = function (a, b) {
//     return a / b;
// }

// divide(50, 5);

// const sum = (a, b) => {
//     return a + b;
// }

// const sum = (a, b) => a + b;

// const isEven = a => a % 2 === 0;

// sum(10, 20);




// const user = {
//     firstname: 'Agil',
//     lastname: 'Atakishiyev',
//     getFullname: function () {
//         // this points to user
//         return this.firstname + " " + this.lastname;
//     },
//     getFullnameArrow: () => {
//         // this points to window object
//         return this.firstname + " " + this.lastname;
//     }
// }
// console.log(user.getFullname()) // "Agil Atakishiyev"
// console.log(user.getFullnameArrow()) // "undefined undefined"

/* 
    Differences between function declaration and function expression
    1. Function expressions can only be called after its declaration
*/

/* 
    Differences between function declaration and arrow functions
    1. Function expressions can only be called after its declaration
    2. `this` value is different
    3. `arguments` keyword does not work in arrow functions
*/

// function findMax () {
//     let maxValue = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if(arguments[i] > maxValue) {
//             maxValue = arguments[i];
//         }    
//     }
//     return maxValue;
// }

// findMax(3, 1, 100, 50, 10); // 100

// const findMin = (...numbers) => {
//     let minValue = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < minValue) {
//             minValue = numbers[i];
//         }
//     }
//     return minValue;
// }


// console.log(findMin(3, 1, 100, 50, 10, -4)); // -4

// const sum = (a, b, c, ...numbers) => {
//     console.log(a, b, c);
//     console.log(numbers);

// }

// sum(5, 100, 30, 40, 10, 2000, 50);

// const firstname = "Bahruz";

// const array = [1, 2, 3, 4, 5, 6, 7];
// const [firstElement] = array;
// console.log(restOfTheArray);
const user = {
    firstname: 'Agil',
    lastname: 'Ata',
    birthdate: '26-01-1999',
    patronymicName: 'Elkhan'
};

// THE BAD
// console.log(user.firstname);
// console.log(user.lastname);

// THE GOOD
const { firstname: customFirstname, ...restOfUserProperties } = user;
console.log(firstname)
console.log(restOfUserProperties);
// console.log(firstname);
// console.log(customFirstname);


// THE UGLY