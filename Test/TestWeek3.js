// =============== Question #25 ===============
// Implement the function  "encode(plainText)" which returns an encoded message.

// It receives a "plainText" string parameter, for example "aaaabccaaa".

// You must encode it by counting each consecutive sequence of a letter. e.g. in "aaaabcccaaa" there are :
//  - 4 times the letter "a"
//  - then 1 "b"
//  - then 3 "c"
//  - then 3 "a"

// Therefore you must return the string "4a1b3c3a"

// Constraints:
//  - "plainText" us made of lowercase letter: "a-z"
//  - "plainText" is never "null" and has a maximum length of 1500 characters"

// function encode(plainText) {
//     let result = '', count = '', prev = '', letter = '';
//     for(let x of plainText){
//         if(x === prev) count++;
//         else{
//             result += count + prev
//             count = 1;
//             prev = x;
//             letter = x
//         }    
//     }
//     result += count + letter
//     return result;
// }

/* ##################################################### */

function encode(plainText) {
    let result = '', count = 1, prev = '', letter = '';
    for(let i = 0, l = plainText.length; i < l; i++){
        while(plainText[i] === plainText[i+1]){
            count++;
            i++;
        }
        result += count + plainText[i];
        count = 1;
    }
    return result;
}

console.log(encode('aaaabcccaaa'))
console.log(encode('aabaa'))
console.log(encode('aaaabcccaaa'))
console.log(encode('abcdefghijklmnopqrstuvwxyzzzz'))


// =============== Question #26 ===============
// In order to detect errors on identification numbers, a check digit is often added at the end of that number.

// Implement the function "computeCheckDigit(identificationNumber)" that takes a number (as a string) and returns the check digit, using the following algorithm:

//  - Sum the digits in the even-numbered positions (positions 0, 2, 4, etc.).
//  - Multiply the result by three.
//  - Add the digits in the odd-numbered positions to the result (positions 1, 3, 5, etc.).
//  - Take the last digit of the result.
//  - If it's not 0, substract this digit from 10. Otherwise, keep it as 0.
//  - Return the result.

// (Assuming that the first digit on the left has the position 0)

// Example:

// Given the identification number "39847":

//  - Sum the digits in the even-numbered positions: "3 + 8 + 7 = 18".
//  - Multiplied by three: "18 * 3 = 54".
//  - Add the digits in the odd-numbered positions: 54 + (9 + 4) = 67".
//  - Last digit: "7".
//  - Subtract 7 from 10: "10 - 7 = 3"

// The expected result is "3" for "39847".

// Constraints:

function computeCheckDigit(identificationNumber) {
    let value = String(identificationNumber)

    let even = 0, odd = 0;
    for (let i = 0, l = value.length; i < l; i++) {
        (i % 2) === 0 ? even += Number(value[i]) : odd += Number(value[i]);
    }
    
    even *= 3;
    even += odd;

    let result = String(even)
    result = Number(result[result.length - 1])

    if (result !== 0) result = 10 - result;

    return result;
}

console.log(computeCheckDigit(39847))
console.log(computeCheckDigit(34))
console.log(computeCheckDigit(343428))
console.log(computeCheckDigit(983468))


// =============== Question #27 ===============
// The function "computeMultiplesSum(n)" should return the sum of all the positive multiple of 3 or 5 or 7 strictly below "n".

// As an example, for "n = 11" we get 3,5,6,7,8,10 as multiples and the sum of these multiples is 40.

// Implement "computeMultiplesSum(n)".

// Constraints
//  - 0 <= n < 1000

function computeMultiplesSum(n) {
    let multiples = [3, 5, 7];
    let result = [];
    for (let num of multiples) {
        for (let i = 1; i <= n; i++) {
            if ((num * i) < n) {
                if (!(result.includes(num * i))) result.push(num * i);
            }
        }
    }

    let total = result.reduce((pre, curr) => {
        return pre + curr;
    });

    return total;
}

console.log(computeMultiplesSum(15))
console.log(computeMultiplesSum(100))
console.log(computeMultiplesSum(999))


// =============== Question #28 ===============
// Write the body of the "calc(array, n1, n2)" function.

// "array" is an array of integers. The "n1" and "n2" parameters are integers defined by the relation "0 <= n1 <= n2 < array.length".

// The "calc" function should return the sum of the integers of "array" whose index belongs to the "[n1; n2]" interval.

function calc(array, n1, n2){
    let result = 0;
    for(let i = n1; i <= n2; i++){
        result += array[i];
    }
    return result;
}

var array = [0,1,2,3,4,5,3];
console.log(calc(array, 0, 1)); // 1
console.log(calc(array, 0, 5)); // 15
console.log(calc(array, 0, 0)); // 0
console.log(calc(array, 0, 6)); // 18