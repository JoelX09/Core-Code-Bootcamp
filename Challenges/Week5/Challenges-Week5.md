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

4. [Mumbling][4] Using Typescript.

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


***

<strong><h3>Wednesday (02-09-2022)</h3></strong>


***

<strong><h3>Thursday (02-10-2022)</h3></strong>


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