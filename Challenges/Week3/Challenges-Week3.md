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

1. Challenge 1: [https://www.codewars.com/kata/55c45be3b2079eccff00010f][4].

    ```javascript
    function order(words){
        let temp = words.split(" ");
        let result = [], pos = 0;
        for(let x of temp){
            pos = x.replace(/[a-zA-Z]/g, "");
            result[pos] = x;
        }
        return result.join(" ").trim();
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1][5].

    ``` javascript
    function duplicateCount(text){
        text = text.toLowerCase();
        let count = 0;
        while(text){
            let finds = text.match(new RegExp(text[0], "g"));
            if(finds && finds.length > 1) count++;
            text = text.replace(new RegExp(text[0], "g"),'');
        }
        return count;
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/520b9d2ad5c005041100000f][6].

    ```javascript
    function pigIt(str){
        str = str.split(" ");
        let letter = '';
        for(let i = 0, l = str.length; i< l; i++){
            if(str[i].match(/[a-zA-Z]/g)){
                letter = str[i][0];
                str[i] = str[i].slice(1);
                str[i] += letter + "ay";
            }
        }
        return str.join(" ");
    }
    ```

***

<strong><h3>Wednesday (01-26-2022)</h3></strong>

1. Challenge 1: [https://www.codewars.com/kata/52774a314c2333f0a7000688][7].

    ```javascript
    function validParentheses(parens) {
        if(parens === "") return true;
        if(parens.length % 2 !== 0) return false;
        if(parens[0] === ')' || parens[parens.length-1] === '(') return false;
        let open = 0, closed = 0;
        for(let x of parens){
            if(x === '(') open++;
            if(x === ')') closed++;
            if(closed > open) return false;
        }
        if(open === closed) return true;
        return false;
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/517abf86da9663f1d2000003][8].

    ``` javascript
    function toCamelCase(str){
        return str.split(/-|_/).map((word, i) =>{
            if(word.length === 0) return "";
            if(i===0) return word;
            return word[0].toUpperCase() + word.slice(1);
        }).join("");
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/54e6533c92449cc251001667][9].

    ```javascript
    var uniqueInOrder=function(iterable){
        let result = [], previous = '';
        for(let x of iterable){
            if(x !== previous) result.push(x);
            previous = x;
        }
        return result;
    }
    ```

***

<strong><h3>Thursday (01-27-2022)</h3></strong>

1. Challenge 1: [https://www.codewars.com/kata/57ea70aa5500adfe8a000110][10].

    ```javascript
    function foldArray(array, runs){
        let aux = array, result = [], l = 0, add = 0;

        while(runs > 0){
            result = [];
            l = Math.trunc(aux.length / 2)
            add = aux.length-1;

            for(let i = 0; i < l; i++){
                result.push(aux[i]+aux[add]);
                add--;
            }

            if(aux.length % 2 === 1) result.push(aux[l]);
            aux = result;
            runs--;
        }

        return result;
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/5848565e273af816fb000449][11].

    ``` javascript
    var encryptThis = function(text) { 
        return text.split(" ").map((word) => {
            if(word.length === 1) return '' + word.charCodeAt();
            if(word.length === 2) return word.charCodeAt(0) + word[1];
            return word.charCodeAt(0) + word[word.length-1] + word.slice(2,-1) + word[1];
        }).join(" ");
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/53368a47e38700bd8300030d][12].

    ```javascript
    function list(names){
        if(names.length === 0) return '';
        let result = names[0].name;
        for(let i = 1, l = names.length; i < l; i++){
            i + 1 === l ? result += ' & ' + names[i].name : result += ', ' + names[i].name
        }
        return result;
    }
    ```

4. ✨Complete your 2nd [Core Challenge][13]. This is one of the requirements for the certification, where you'll boost your dev professional-brand.
 
    * [LinkedIn](https://www.linkedin.com/in/joelxicara/)

***

<strong><h3>Friday (01-28-2022)</h3></strong>

  * [Test](../../Test/TestWeek3.js)

<br>

[Home](../../README.md)

[1]: https://www.codewars.com/kata/5266876b8f4bf2da9b000362
[2]: https://www.codewars.com/kata/526571aae218b8ee490006f4
[3]: https://www.codewars.com/kata/54b724efac3d5402db00065e
[4]: https://www.codewars.com/kata/55c45be3b2079eccff00010f
[5]: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
[6]: https://www.codewars.com/kata/520b9d2ad5c005041100000f
[7]: https://www.codewars.com/kata/52774a314c2333f0a7000688
[8]: https://www.codewars.com/kata/517abf86da9663f1d2000003
[9]: https://www.codewars.com/kata/54e6533c92449cc251001667
[10]: https://www.codewars.com/kata/57ea70aa5500adfe8a000110
[11]: https://www.codewars.com/kata/5848565e273af816fb000449
[12]: https://www.codewars.com/kata/53368a47e38700bd8300030d
[13]: https://corecode.notion.site/LinkedIn-Boost-Guide-5974abb0f917458ea235d3288ac6c7d3