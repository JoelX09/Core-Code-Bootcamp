<h1 align="center">Typescript</h1>

<strong><h3>Monday (02-07-2022)</h3></strong>

1. Read [this][1] from `The primitives: string, number and boolean` to `Differences Between Type Aliases and Interfaces` section.

    ```
    Done
    ```

2. [Square(n) Sum][2] Using `Typescript`.

    ```typescript
    export function squareSum(numbers: number[]): number {
        return numbers.reduce((p, c) => {
            return p + Math.pow(c,2);
        }, 0);
    }
    ```

3. [Growth of a Population][3] Using `Typescript`.

    ```typescript
    export class G964 {

        public static nbYear = (p0, percent, aug, p) => {
            percent = percent / 100;  
            let count: number = 1;
            p0 = p0 + p0 * percent + aug;
            while(p0 < p){
                p0 = p0 + p0 * percent + aug;
                count ++;
            }
            return count;
        }
    }
    ```

4. [Mumbling][4] Using `Typescript`.

    ```typescript
    export function accum(s: string): string {
        let result:string = s.split("").map((element, i) => {
            return element.toUpperCase() + element.toLowerCase().repeat(i);
        }).join("-");
        return result;
    }
    ```

5. [A wolf in sheep's clothing][5] Using `Typescript`.

    ```typescript
    export function warnTheSheep(queue: string[]): string {
        if(queue.pop() === 'wolf') return "Pls go away and stop eating my sheep";
        return `Oi! Sheep number ${queue.length - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }
    ```

***

<strong><h3>Tuesday (02-08-2022)</h3></strong>

1. [A Rule of Divisibility by 13][6] Using `Typescript`

    ```typescript
    export function thirt(n: number): number {
        let stationary = 0;
        let remainders = [1, 10, 9, 12, 3, 4];

        let reverse: string[] = [];
        let index = 0;
        while (true) {
            reverse = String(n).split("").reverse();

            stationary = reverse.reduce((p, c) => {
            if (index > 5) index = 0;
            p = p + Number(c) * remainders[index++];
            return p;
            }, 0);

            if (n === stationary) return stationary;
            index = 0;
            n = stationary;
        }
    }
    ```

2. [Playing with digits][7] Using `Typescript`.

    ```typescript
    export class G964 {

    public static digPow = (n: number, p: number) => {
      let number: number = n.toString().split("")
        .reduce((prev, curr) => {
            return prev + Math.pow(Number(curr), p++);
        }, 0);
      
      return number % n ? -1 : number / n;
    }
    ```

3. [Valid Braces][8] Using `Typescript`.

    ```typescript
    export function validBraces(braces: string): boolean {
        let aux: string[] = [], result = true, open = 0, close = 0;
        braces.split("").forEach((element) => {
            if(element === '(' || element === '{' || element === '['){
            aux.push(element);
            open++;
            }
            if(element === ')'){
            close++;
            if(aux.pop() !== '(') result = false;
            }
            if(element === '}'){
            close++;
            if(aux.pop() !== '{') result = false;
            }
            if(element === ']'){
            close++;
            if(aux.pop() !== '[') result = false;
            }
        });
        
        if(open !== close) return false;
        return result;
    }
    ```

4. [Tic-Tac-Toe][9] Using `JavaScript`.

    ```javascript

    ```

5. [Tic-Tac-Toe-like table Generator][10] Using `JavaScript`.

    ```javascript
    function displayBoard(board, width){
        let result = " " + board.reduce((p, c, i) => {
            if(i%width === 0) return p + " \n" + "-".repeat(width*4 - 1) + "\n " + c;
            return `${p} | ${c}`;
        }) + " ";
        return result;
    }
    ```

***

<strong><h3>Wednesday (02-09-2022)</h3></strong>

1. [Duplicate Encoder][11] Using `Typescript`

    ```typescript
    export function duplicateEncode(word: string){
        let result: string = '';
        let temp: string[] = [];
        let character: string = '';
        let characters: string[] = word.toLowerCase().split("");
        while(characters.length > 0){
            character = String(characters.pop());
            characters.indexOf(character) !== -1 || temp.indexOf(character) !== -1 ? result = ')' + result : result = '(' + result;
            temp.push(character);
        }
        return result;
    }
    ```

2. [Find the odd int][12] Using `Typescript`

    ```typescript
    export const findOdd = (xs: number[]): number => {
        let num: number = 0;
        let temp: number = 0;
        xs.map((n, i, xs) => {
            temp = xs.reduce((p, c) => {
            if(c === n) p++;
            return p;
            },0);
            if(temp % 2 !== 0) num = n;
        });
        return num;
    };
    ```

3. [Which are in?][13] Using `Typescript`

    ```typescript
    export class G964 {
        public static inArray(a1: string[], a2: string[]): string[] {
            return a1.filter(e => {
                return a2.join("#").indexOf(e) !== -1 ? true : false;
            }).sort();
        }
    }
    ```

4. [Sums of Parts][14] Using `Typescript`

    ```typescript
    export function partsSums(ls: number[]): number[] {
        let result: number[] = [];
        let sum:number = ls.reduce((p,c) => p+c, 0);
        result.push(sum);
        ls.map(n => {
            sum -= n;
            result.push(sum);
        });
        
        return result;
    }
    ```

5. [Consecutive strings][15] Using `Typescript`

    ```typescript
    export function longestConsec(strarr: string[], k: number): string {
        let n = strarr.length;
        if(n === 0 || k > n || k <= 0) return '';
        
        let result:string = '', temp: string = '';
        strarr.map((e, i, starrr) => {
            temp = starrr.slice(i, i+k).join("");
            if(temp.length > result.length) result = temp;
        })
        return result;
    }
    ```

***

<strong><h3>Thursday (02-10-2022)</h3></strong>

1. [Tile][16] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W5-Wed-E1)

2. [Time][17] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W5-Wed-E2)

3. [Rational][18] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W5-Wed-E3)

4. ✨Complete your 4th [Core Challenge][19]. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

    [Certificate](https://www.credential.net/1b666e7a-6b12-4b9b-8795-285f82f95531#gs.rwpwm7)

***

<strong><h3>Friday (02-11-2022)</h3></strong>

  * [Test](../../Test/TestWeek5.js)


<br>

[Home](../../README.md)

[1]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
[2]: https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript
[3]: https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript
[4]: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript
[5]: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript
[6]: https://www.codewars.com/kata/564057bc348c7200bd0000ff
[7]: https://www.codewars.com/kata/5552101f47fc5178b1000050
[8]: https://www.codewars.com/kata/5277c8a221e209d3f6000b56
[9]: https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc
[10]: https://www.codewars.com/kata/5b817c2a0ce070ace8002be0
[11]: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
[12]: https://www.codewars.com/kata/54da5a58ea159efa38000836
[13]: https://www.codewars.com/kata/550554fd08b86f84fe000a58/
[14]: https://www.codewars.com/kata/5ce399e0047a45001c853c2b/
[15]: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
[16]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E0/desc/ED0W5.md
[17]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E1/desc/ED1W5.md
[18]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E2/desc/ED2W5.md
[19]: https://corecode.notion.site/Earn-your-SCRUM-certificate-8d9d0d40abaa4ee18c77c5a2cc1929b8