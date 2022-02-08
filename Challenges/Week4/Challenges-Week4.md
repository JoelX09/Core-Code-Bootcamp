<h1 align="center">npm, npx & Typescript</h1>

<strong><h3>Monday (01-31-2022)</h3></strong>

1. Check [this][1] video.

    ```
    Done
    ```

2. Follow [this][2] video.

    ```
    Done
    ```

3. Follow [this][3] guide.
    - [Regex Exercises](./src/RegexExercises.js)

        ```
        Done
        ```

4. Check [this][4] video.

     ```
    Done
    ```

5. Follow [this][5] video.
    - [Notes](./src/Promises.js)

        ```
        Done
        ```

6. Check [this][6] video.

    - [Notes](./src/Promises-Async-Await.js)
        ```
        Done
        ```

***

<strong><h3>Tuesday (02-01-2022)</h3></strong>

1. [This][7] link is nice to have and read.

    ```
    Done
    ```

2. [Typescript object type][8]
    - [Excersice 1](./src/TS_Exercise1.ts)

        ```
        Done
        ```

3. Read [this][9].

    ```
    Done
    ```

4. [Typescript union types][10].
    - [Excersice 2](./src/TS_Exercise2.ts)

        ```
        Done
        ```

5. [Typescript in operator][11].
    - [Excersice 3](./src/TS_Exercise3.ts)

        ```
        Done
        ```

6. [Find the odd int][12].

    ```javascript
    function findOdd(A) {
        A = A.sort()
        if(A.length === 1) return A.pop();
        let num = 0, count = 1;
        for(let i = 0, l = A.length; i < l; i++){
        if(A[i] === A[i+1]){
            count++;
        }else{
            if((count % 2) !== 0){
                return A[i]
            }
            count = 1;
        }
        }
        
        return 0;
    }
    ```

6. [Stop gninnipS My sdroW!][13].

    ```javascript
    function spinWords(string){
        return string.split(" ")
                .map((word) => {
                    if(word.length >= 5) return word.split("").reverse().join("");
                    return word;
                }).join(" ");
    }
    ```

***

<strong><h3>Wednesday (02-02-2022)</h3></strong>

1. [Array.diff][14].

    ```javascript
    function arrayDiff(a, b) {
        return a.filter((element) => !b.includes(element));
    }
    ```

2. [Create Phone Number][15].

    ```javascript
    function createPhoneNumber(numbers){
        return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6,).join("")}`
    }
    ```

3. Watch [this][16].

    ```
    Done
    ```

4. Watch [this][17].

    ```
    Done
    ```

5. Read [this][18].

    ```
    Done
    ```

6. Read [this][19].

    ```
    Done
    ```

7. Read [this][20].

    ```
    Done
    ```

***

<strong><h3>Thursday (02-03-2022)</h3></strong>

1. [Detect Pangram][21].

    ```javascript
    function isPangram(string){
        string  = string.toLowerCase();
        for(let i = 97; i<=122; i++){
            if(!string.includes(String.fromCharCode(i))) return false;
        }
        return true;
    }
    ```

2. [Find the missin letter][22].

    ``` javascript
    function findMissingLetter(array){
        for(let i =1, l = array.length; i < l; i++){
            if((array[i].charCodeAt() - (array[i-1]).charCodeAt() !== 1)) return String.fromCharCode((array[i].charCodeAt()-1));
        }
    }
    ```

3. [Find the unique number][23].

    ```javascript
    function findUniq(arr) {
        let count = 1, unique = 0;
        arr.sort().map((num, i, arr) => {
            num !== arr[i+1] ? (count === 1 ? unique = num : count = 1) : count++;
        });
        return unique;
    }
    ```

4. [Reverse or rotate?][24].

    ```javascript
    function revrot(str, sz) {
        if(str === "" || sz > str.length || sz === 0) return "";
        
        let aux = [];
        for(let i = 0, count = Math.trunc(str.length/sz); i < count; i++){
            aux.push(str.slice(i*sz, (i+1)*sz));
        }
        
        return aux.map((chunk) => {
            let a = chunk.split("").reduce((prev, curr) => {
            return prev + Math.pow(Number(curr), 3);
            }, 0);
            
            if(a%2 === 0) return chunk.split("").reverse().join("");
            return chunk.slice(1) + chunk[0];
        }).join("");
    
    }
    ```

5. [What's Your Poison?][25].

    ```javascript
    
    ```

6. ✨Complete your 3rd [Core Challenge][26]. This is one of the requirements for the certification, where you'll boost your dev professional-brand.
 
    * [GitHub](https://github.com/JoelX09)

***

<strong><h3>Friday (02-04-2022)</h3></strong>

  * [Test](../../Test/TestWeek4.js)
<br>

[Home](../../README.md)

[1]: https://www.youtube.com/watch?v=sXQxhojSdZM
[2]: https://www.youtube.com/watch?v=909NfO1St0A
[3]: https://dev.to/codebubb/javascript-regex-exercises-01-5078
[4]: https://www.youtube.com/watch?v=RvYYCGs45L4
[5]: https://www.youtube.com/watch?v=DHvZLI7Db8E
[6]: https://www.youtube.com/watch?v=rKK1q7nFt7M
[7]: https://www.typescriptlang.org/docs/handbook/intro.html
[8]: https://typescript-exercises.github.io/#exercise=1
[9]: https://blog.logrocket.com/types-vs-interfaces-in-typescript/
[10]: https://typescript-exercises.github.io/#exercise=2
[11]: https://typescript-exercises.github.io/#exercise=3
[12]: https://www.codewars.com/kata/54da5a58ea159efa38000836
[13]: https://www.codewars.com/kata/5264d2b162488dc400000001
[14]: https://www.codewars.com/kata/523f5d21c841566fde000009
[15]: https://www.codewars.com/kata/525f50e3b73515a6db000b83
[16]: https://www.youtube.com/watch?v=m_MQYyJpIjg
[17]: https://www.youtube.com/watch?v=08CWw_VD45w
[18]: https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b
[19]: https://naveenkumarkoppala.medium.com/typescript-oops-c327678744b0
[20]: https://rambabupadimi.medium.com/typescript-object-oriented-programming-7a6fd905d90e
[21]: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
[22]: https://www.codewars.com/kata/5839edaa6754d6fec10000a2
[23]: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
[24]: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
[25]: https://www.codewars.com/kata/58c47a95e4eb57a5b9000094
[26]: https://corecode.notion.site/GitHub-Boost-Guide-167914056cff4522886a78756f659e47