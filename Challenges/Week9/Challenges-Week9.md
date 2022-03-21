<h1 align="center">React & Node</h1>

<strong><h3>Monday (03-07-2022)</h3></strong>

1. Watch this [video][1].

        Done

2. Watch this [video][2].

        Done

3. [React kata][3].

    ```javascript
    import React from 'react';

    export const EggList = (props) => {
      const eggs = props.eggs;
      const listItems = eggs.map((egg, index) =>
        <EasterEgg key={index.toString()}
                  name={egg} />
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    };

    export const EasterEgg = (props) => {
      return <li>{props.name}</li>;
    };
    ```

***

<strong><h3>Tuesday (03-08-2022)</h3></strong>

1. Read the following resources about Node.JS and explain what's Node.JS in your own words:
    - [Resource 1][4]
        
          Done

    - [Resource 2][5] (You can use any other resource of your choice.)

          Done
    
    - What's Node.js?
          
          Is a set of tools that allow us to execute any kind of project written in JavaScript.

2. Answer the question: What is the V8 Javascript Engine? (Use your own words).

        It's the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
        V8 provides the runtime environment in which JavaScript executes. 

3. Answer the question: What is NVM and Why is it useful for Node.JS developers?

        Is a version manager for Node.js. NVM allow us to quickly install and use different versions of node via the command line.

4. Learn about the Node.JS module system, you can start [here][6].

        Done

5. Read about the different types of Node.JS modules.

        Done

6. Explain the differences between ES Modules and CommonJS modules.

        ES modules are the standard for JavaScript, while CommonJS is the default in Node.js

7. Create your own Local Node.JS module. The module must contain a function that calculates
the sum of two numbers. Use the previously created function in another file in any way.

        Done

8. Watch [this][7] video about the Client-Server architecture.

        Done

***

<strong><h3>Wednesday (03-09-2022)</h3></strong>

1. Watch [this][8] video about what is an API.
        
        Done

2. Answer the question: Are APIs only available on the Internet?

        No. The API is just a defined interface to be able to 
        control/communicate with some software. 

3. Learn what JSON is, you can start [here][9].

        Done

4. Read about HTTP, [here][10] you have a good place to start.

        Done

5. Read about REST APIs, you can start [here][11].

        Done

***

<strong><h3>Thursday (03-10-2022)</h3></strong>

1. Learn about Express JS, try using the [official documentation][12], use any other resource if you like.

        Done

2. Learn about Postman using [this][13] course.

        50% Done

3. List 3 available postman alternatives.

    - [Insomnia](https://insomnia.rest/)
    - [Paw](https://paw.app/)
    - [Testfully](https://testfully.io/)

4. ✨ Complete your [Interview Prep Core Challenge][14].

***

<strong><h3>Friday (03-11-2022)</h3></strong>

  * [Test](../../Test/TestWeek9.js)


<br>

[Home](../../README.md)

[1]: https://www.youtube.com/watch?v=N3AkSS5hXMA
[2]: https://www.youtube.com/watch?v=hQAHSlTtcmY
[3]: https://www.codewars.com/kata/5a95947f4a6b342636000173
[4]: https://nodejs.dev/learn
[5]: https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/
[6]: https://nodejs.org/api/modules.html
[7]: https://www.youtube.com/watch?v=h-n_gyyNly8
[8]: https://www.youtube.com/watch?v=s7wmiS2mSXY
[9]: https://www.youtube.com/watch?v=iiADhChRriM
[10]: https://developer.mozilla.org/es/docs/Web/HTTP
[11]: https://www.redhat.com/es/topics/api/what-is-a-rest-api
[12]: https://expressjs.com/
[13]: https://www.youtube.com/watch?v=VywxIQ2ZXw4
[14]: https://www.notion.so/Mock-Interviews-a997bd9a907c43e58530ffca517f4cae