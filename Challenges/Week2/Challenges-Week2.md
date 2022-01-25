<h1 align="center">Javascript</h1>

<strong><h3>Monday (01-17-2022)</h3></strong>

1. Follow the github course, you can find it [here][1].

    ```
    Done. Lesson 1 - 4.
    ```

2. Watch [this][2] video.

    ```
    Done
    ```

3. Read [this][3].

    ```
    Done
    ```

4. Create an account in [Codewars][4].

    [JoelX09][5]

***

<strong><h3>Tuesday (01-18-2022)</h3></strong>

0. Watch [this][6] video.

    ```
    Done
    ```

1. Challenge 1: [https://www.codewars.com/kata/50654ddff44f800200000004][7].

    ```javascript
    function multiply(a, b){
      return a * b
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/572b6b2772a38bc1e700007a][8].

    ```javascript
    function uniTotal (string) {
      var total = 0;
      for(let x of string){
        total += x.charCodeAt(0)
      }
      return total
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/55ad04714f0b468e8200001c][9].

    ```javascript
    function getChar(c){
      return String.fromCharCode(c);
    }
    ```

4. Challenge 4: [https://www.codewars.com/kata/551f37452ff852b7bd000139][10].

    ```javascript
    function addBinary(a,b) {
      let add = a + b;
      let binary = add.toString(2)
      return String(binary)
    }
    ```

5. Challenge 5: [https://www.codewars.com/kata/5ad0d8356165e63c140014d4][11].

    ```javascript
    function finalGrade (exam, projects) {
      if(exam > 90 || projects > 10) return 100;
      if(exam > 75 && projects >= 5) return 90;
      if(exam > 50 && projects >= 2) return 75;
      return 0;
    }
    ```

***

<strong><h3>Wednesday (01-19-2022)</h3></strong>

1. Challenge 1: [https://www.codewars.com/kata/57e92e91b63b6cbac20001e5][12].

    ```javascript
    function dutyFree(normPrice, discount, hol) {
      return Math.trunc(hol/(normPrice*(discount/100)))
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/5b853229cfde412a470000d0][13].

    ```javascript
    function twiceAsOld(dadYearsOld, sonYearsOld) {
      return Math.abs(dadYearsOld - sonYearsOld *2);
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/5f77d62851f6bc0033616bd8][14].

    ```javascript
    function validSpacing(s) {
      if(s.length === 0) return true;
      if(s[0] === ' ' || s[s.length-1] === ' ') return false;
      
      for(let i = 0; i < s.length; i++)
        if(s[i] === ' ' && s[i+1] === ' ') return false;
      
      return true;
    }
    ```

4. Challenge 4: [https://www.codewars.com/kata/57eae65a4321032ce000002d][15].

    ```javascript
    function fakeBin(x){
      let result = ''
      for(let digit of x)
        Number(digit)<5 ? result += 0 : result += 1
      return result
    }
    ```

***

<strong><h3>Thursday (01-20-2022)</h3></strong>

1. Challenge 1: [https://www.codewars.com/kata/57faece99610ced690000165][16].

    ```javascript
    function remove (string) {  
      let result = string;
      while(result[result.length -1] === "!")
        result = result.substr(0, result.length-1)
      return result;
    }
    ```

2. Challenge 2: [https://www.codewars.com/kata/5547929140907378f9000039][17].

    ```javascript
    function shortcut (string) {
      return string.replace(/[aeiou]/g, "");
    }
    ```

3. Challenge 3: [https://www.codewars.com/kata/5672a98bdbdd995fad00000f][18].

    ```javascript
    function rps = (p1, p2) => {
      if(p1 === p2) return "Draw!";
      if(p1 === "paper" && p2 === "rock") return "Player 1 won!";
      if(p1 === "scissors" && p2 === "paper") return "Player 1 won!";
      if(p1 === "rock" && p2 === "scissors") return "Player 1 won!";
      return "Player 2 won!";
    }
    ```

4. Challenge 4: [https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec][19].

    ```javascript
    function persistence(num) {
      let count = 0, result;
      while(num > 9){
        result = 1;
        for(let x of String(num))
          result *= Number(x);
        num = result;
        count++;
      }
      return count;
    }
    ```

5. ✨Complete your 1st [Core Challenge][20]. This is one of the requirements for the certification, where you'll boost your dev professional-brand.
    ```
    I’m Joel Xicara, a software developer, I’ve worked with Java, JavaScript, C#, Python, MySQL on University projects. I want to expand my knowledge and skills to offer solutions that benefit people’s lives, working with commitment and responsability to achieve it.
    ```

<br>

[Home](../../README.md)

[1]: https://www.udacity.com/course/version-control-with-git--ud123
[2]: https://www.youtube.com/watch?v=A37-3lflh8I
[3]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
[4]: https://www.codewars.com/
[5]: https://www.codewars.com/users/JoelX09
[6]: https://www.youtube.com/watch?v=cEBkvm0-rg0
[7]: https://www.codewars.com/kata/50654ddff44f800200000004
[8]: https://www.codewars.com/kata/572b6b2772a38bc1e700007a
[9]: https://www.codewars.com/kata/55ad04714f0b468e8200001c
[10]: https://www.codewars.com/kata/551f37452ff852b7bd000139
[11]: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
[12]: https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
[13]: https://www.codewars.com/kata/5b853229cfde412a470000d0
[14]: https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
[15]: https://www.codewars.com/kata/57eae65a4321032ce000002d
[16]: https://www.codewars.com/kata/57faece99610ced690000165
[17]: https://www.codewars.com/kata/5547929140907378f9000039
[18]: https://www.codewars.com/kata/5672a98bdbdd995fad00000f
[19]: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
[20]: https://corecode.notion.site/Mission-Statement-666f515d76084c8e8c996b473b4d6317