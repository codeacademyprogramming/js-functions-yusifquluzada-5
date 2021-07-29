"use strict";


// Implement findEven function(it can accept unlimited parameters)

// Normal Function

console.log("Even numbers:");
function findEven() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 0) {
            console.log(arguments[i]);
        }
    }
}

findEven(1, 2, 3, 4, 33, 66);



// Anonymous function


// const findEven = (...numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             console.log(numbers[i]);
//         }
//     }
// }

// findEven(1, 2, 3, 4, 33, 66, 88);



// Implement findOdd function(it can accept unlimited parameters)

// Normal Function

console.log("Odd numbers:");
function findOdd() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 === 1) {
            console.log(arguments[i]);
        }
    }
}

findOdd(23, 44, 77, 89, 112);



// Anonymous function


// const findOdd = (...numbers) => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 1) {
//             console.log(numbers[i]);
//         }
//     }
// }

// findOdd(23, 44, 77, 89, 112, 113, 155, 177);



/*

Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Go to the editor Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself

*/

let num = parseInt(prompt("Please enter the number to check for prime or not"))

const isPrime = (num) => {
    if (num === 1) {
        alert("1 is not prime nor composite number");
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % 2 === 0) {
                alert("Non Prime");
                return false;
            }
            break;
        }
        alert("Prime");
        return true;
    }
}

console.log(isPrime(num));