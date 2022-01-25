<h1 align="center">Javascript</h1>

<strong><h3>Monday (01-24-2022)</h3></strong>

1. Challenge 1: [https://www.codewars.com/kata/5266876b8f4bf2da9b000362][1].

    ```javascript
    function likes(names) {
        if(names.length === 0) return 'no one likes this';
        if(names.length === 1) return names[0] + ' likes this';
        if(names.length === 2) return names[0] + ' and ' + names[1] + ' like this';
        if(names.length === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/526571aae218b8ee490006f4][2].

    ``` javascript
    var countBits = function(n) {
        return n.toString(2).replace(/0/g, "").length;
    };
    ```

3. Challenge 3: [https://www.codewars.com/kata/54b724efac3d5402db00065e][3].

    ```javascript
    decodeMorse = function(morseCode){
        let message = '';
        let words = morseCode.trim().split("   ");
        for(let word of words){
            let characters = word.split(" ")
            for(let character of characters){
            message += MORSE_CODE[character];
            }
            message += ' ';
        }
        return message.trim();
    }
    ```

***

<strong><h3>Tuesday (01-25-2022)</h3></strong>


***

<strong><h3>Wednesday (01-26-2022)</h3></strong>


***

<strong><h3>Thursday (01-27-2022)</h3></strong>

<br>

[Home](../../README.md)

[1]: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
[2]: https://www.codewars.com/kata/526571aae218b8ee490006f4
[3]: https://www.codewars.com/kata/54b724efac3d5402db00065e