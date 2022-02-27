<h1 align="center">Typescript</h1>

<strong><h3>Monday (02-14-2022)</h3></strong>

1. Read [this][1].

    ```
    Done
    ```

2. [Menu][2] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W6-Mon-E1)

***

<strong><h3>Tuesday (02-15-2022)</h3></strong>

1. [Movies][3] Using `Typescript`.

    [Solution](https://github.com/JoelX09/W6-Tu-E1)

2. [Readme][4].

    ```

    ```

3. [Interfaces][5].

    [Example](./src/InterfaceExample.ts)

    [Exercise](./src/InterfaceExercise.ts)
        
        Done
        

***

<strong><h3>Wednesday (02-16-2022)</h3></strong>

1. [Build Tower][6] Using `Typescript`

    ```typescript
    export const towerBuilder = (nFloors: number): string[] => {
        let result: string[] = [];
        let temp:string = '';
        for(let i = 1; i <= nFloors; i++){
            temp = ' '.repeat(nFloors-i) + "*".repeat(2 * i - 1) + ' '.repeat(nFloors-i);
            result.push(temp);
        }
        return result;
    }
    ```

2. [Highest Scoring Word][7] Using `Typescript`

    ```typescript
    export const high = (str: string): string => {
        let words:string[] = str.split(" ");
        let size:number = 0, maxSize = 0;
        let result:string = '';
        words.map(e => {
            size = [...e].reduce((p, c) => {
            return p + (c.charCodeAt(0) - 96)
            }, 0);
            
            if(size > maxSize){
            maxSize = size;
            result = e;
            }
        });
        
        return result;
    }
    ```

3. [Equal Sides Of An Array][8] Using `Typescript`

    ```typescript
    export function findEvenIndex(arr: number[]): number
    {
        let left = 0;
        let right = arr.reduce((p,c) => p + c) - arr[0];
        if(left === right) return 0;
        
        for(let i = 1, l = arr.length; i < l; i++){
            left += arr[i-1];
            right -= arr[i];
            
            if(left === right) return i;
        }
        
        return -1;
    }
    ```

4. [Meeting][9] Using `Typescript`

    ```typescript
    export function meeting(s: string): string {
        s = s.toUpperCase();
        let aux:string[] = [];

        let names = s.split(';').map(e => {
            aux = e.split(":");
            return {first: aux[0], last: aux[1]};
        });
        
        names.sort(function(a, b) {
            if(a.last > b.last) return 1;
            if(a.last < b.last) return -1;
            if(a.first > b.first) return 1;
            if(a.first < b.first) return -1;
            return 0;
        });
        
        return names.map(e => {
            return `(${e.last}, ${e.first})`;
        }).join("");
    }
    ```

5. [Street Fighter 2 - Character Selection][10] Using `Typescript`

    ```typescript
    export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
        let result:string[] = [];
        
        for(let move of moves){
            position = positions(position, move) || [0,0];
            result.push(fighters[position[0]][position[1]]);
        }
        
        return result;
    }

    function positions(position:number[], move:string){
        let x = position[0];
        let y = position[1];
        switch(move){
            case 'up':
                return [0,y];
            case 'down':
                return [1,y];
            case 'left':
                return y-1 < 0 ? [x,5] : [x,y-1];
            case 'right':
                return y+1 > 5 ? [x,0] : [x,y+1];
            }
    }
    ```

***

<strong><h3>Thursday (02-17-2022)</h3></strong>

1. Watch [Object Oriented Programming - The Four Pillars of OOP][11].

        Done

2. Watch [Abstract Classes vs Interfaces][12].

        Done

3. Read [Abstract Classes][13].

    [Example 1](./src/AbstractClaseExample1.ts)

    [Example 2](./src/AbstractClaseExample2.ts)

        Done

***

<strong><h3>Friday (02-18-2022)</h3></strong>

  * [Test](../../Test/TestWeek6.js)


<br>

[Home](../../README.md)

[1]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Example/Input.md
[2]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E0/desc/ED0W6.md
[3]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E1/desc/ED1W6.md
[4]: https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week6/Exercices/E2/desc/ED2W6.md
[5]: https://docs.microsoft.com/en-us/learn/modules/typescript-implement-interfaces/
[6]: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
[7]: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
[8]: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
[9]: https://www.codewars.com/kata/59df2f8f08c6cec835000012
[10]: https://www.codewars.com/kata/5853213063adbd1b9b0000be
[11]: https://www.youtube.com/watch?v=1ONhXmQuWP8
[12]: https://www.youtube.com/watch?v=Lnqmde9LP74
[13]: https://sbcode.net/typescript/abstract_classes/