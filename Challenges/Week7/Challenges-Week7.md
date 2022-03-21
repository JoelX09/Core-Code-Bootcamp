<h1 align="center">Typescript</h1>

<strong><h3>Monday (02-21-2022)</h3></strong>

1. [TicTacToe][1] Using `Typescript`.

    [Solution]()

***

<strong><h3>Tuesday (02-22-2022)</h3></strong>

1. [Generics][2] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W7-Tu-E1)

2. [Encrypt this!][3].

    ```typescript
    export const encryptThis = (str: string): string => {
        if(!str) return "";
        return str.split(" ").map((word) => {
            if(word.length === 1) return '' + word.charCodeAt(0);
            if(word.length === 2) return word.charCodeAt(0) + word[1];
            return word.charCodeAt(0) + word[word.length-1] + word.slice(2,-1) + word[1];
        }).join(" ");
    }
    ```

3. [Make the Deadfish Swim][4].
    ```typescript
    export function parse(data: string): number[] {
        let value: number = 0;
        let result: number[] = [];
        
        for(let command of data){
            switch(command) {
                case 'i': value++; break;
                case 'd': value--; break;
                case 's': value *= value; break;
                case 'o': result.push(value); break;
            }
        }
        
        return result;
    }
    ```

***

<strong><h3>Wednesday (02-23-2022)</h3></strong>

1. [More About Generics][5].

    [Example 1](./src/GenericsExercise1.ts)

    [Example 2](./src/GenericsExercise2.ts)

    [Exercise](./src/Exercise.ts)

2. Read and follow [this][6].


3. Read and follow [this][7].


4. [Dashatize it][8].

    ```typescript
    
    ```
***

<strong><h3>Thursday (02-24-2022)</h3></strong>

1. [Type Predicate][9].

2. [Count the smiley faces!][10].
    
    ```typescript
    export function countSmileys(arr: string[]) {
        return arr.filter(face => /[:;][-~]?[)D]/.test(face)).length;
    }
    ```

3. [Human Readable Time][11].

    ```typescript
    export function humanReadable(seconds:number):string {
        let hours = Math.trunc(seconds/3600);
        let minutes = Math.trunc((seconds%3600)/60);
        seconds = (seconds%3600)%60;
        
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    }

    function addZero(num:number):string {
        return num < 10 ? '0'+num : `${num}`;
    }
    ```

4. [Base64 Encoding][12].

    ```typescript
    
    ```

5. ✨Complete your 4th Core Challenge, the [Scrum Essentials Certification](https://university.scrumnetwork.com/).

    [Certificate](https://www.credential.net/1b666e7a-6b12-4b9b-8795-285f82f95531#gs.rwpwm7)

***

<strong><h3>Friday (02-25-2022)</h3></strong>

  * [Test](../../Test/TestWeek7.js)


<br>

[Home](../../README.md)

[1]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week7/Exercices/E0/desc/ED0W7.md
[2]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week7/Exercices/E1/desc/ED1W7.md
[3]: https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript
[4]: https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
[5]: https://docs.microsoft.com/en-us/learn/modules/typescript-generics/
[6]: https://learntypescript.dev/04/l5-union
[7]: https://learntypescript.dev/04/l6-intersection
[8]: https://www.codewars.com/kata/58223370aef9fc03fd000071/typescript
[9]: https://typescript-exercises.github.io/#exercise=4
[10]: https://www.codewars.com/kata/583203e6eb35d7980400002a
[11]: https://www.codewars.com/kata/52685f7382004e774f0001f7
[12]: https://www.codewars.com/kata/5270f22f862516c686000161