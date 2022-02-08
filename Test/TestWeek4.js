// =============== Question #22 ===============
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

function encode(plainText) {
    let result = '', count = 1;
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

console.log(encode('aabaa'))
console.log(encode('aaaabcccaaa'))
console.log(encode('abcdefghijklmnopqrstuvwxyzzzz'))


// =============== Question #23 ===============
// Objective
// Javanais, also known as "Langue de feu" (fire language), is a slang coding 
// process that was used in the late 19th century by some criminals to
// encrypt their conversations. Write a program that returns the Javanais
// translation of a sentece.

// How it works
//  - Before each of the following vowel (a, e, i, o, u), insert the parasitic
//    syllable "av";
//  - Unless the vowel is preceded by another vowel.

// Implementation
// Implement the function "translate(text)" which:
//  - takes as input "text", a string of fewer than 255 characters;
//  - returns the Javanais translation as a string.

// For simplicity, the inputs contain only lowercase letters.

// Example:
//  - text: hello, secret meeting tonight.
//  - Javanais: havellavo, savecravet maveetaving tavonavight.

function translate(text){
    let vowels = 'aeiou';
    let a = text.split("").map((letter, i, text) => {
        if(vowels.includes(letter) && !vowels.includes(text[i-1])) return 'av' + letter;
        return letter;
    });
    return a.join("");
}

console.log(translate("hello, secret meeting tonight."))


// =============== Question #24 ===============
// It's almost the Summer Sales!

// You work for a shop that wishes to give a discount of "discount%" to the
// most expensive item purchased by a given customer during the sales
// period. Only one product can benefit from the discount.

// You are tasked by the shop owner to implement the function
// "calculateTotalPrice(prices, discount)" which takes the list of prices of the
// products purchased by a customer and the percentage "discount" as
// parameters and returns the total purchase price as an integer (rounded 
// down if the total is a float number).

// Constraints:
//  - 0 <= "discount" <= 100
//  - 0 < price of a product < 100000
//  - 0 < number of products < 100

function calculateTotalPrice(prices, discount) {
    let posDiscount = 0;
    prices.reduce((prev, curr, i) => {
        if(curr > prev){
            posDiscount = i;
            return curr;
        }
        return prev;
       
    }, 0);
    
    return Math.trunc(
        prices.reduce((p, c, i) => {
            if(i === posDiscount) return p + c - (c * discount)/100;
            return p + c;
        }, 0)
    );
}

console.log(calculateTotalPrice([100,200,400], 20));


// =============== Question #25 ===============
// "a(i, j)" should return "true" if at least one of the arguments equals 1 or if
// their sum is equal to 1.

// Both given arguments will always be numbers.

// For example:
// "a(1, 5)"  returns "true"
// "a(2, 3)"  returns "false"
// "a(-3, 4)"  returns "true"

function a(i, j){
    if(i === 1 || j === 1 || (i + j) === 1) return true;
    return false;
}

console.log(a(1, 5));
console.log(a(2, 3));
console.log(a(-3, 4));