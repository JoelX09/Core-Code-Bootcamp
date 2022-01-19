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
      if(exam > 90 || projects > 10){
        return 100;
      }else if(exam > 75 && projects >= 5){
        return 90;
      }else if(exam > 50 && projects >= 2){
        return 75;
      }else{
        return 0;
      }
      return 0;
    }
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
