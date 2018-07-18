# Using Functions

Using functions in your chatbot script will provide some powerful options. For example, you can make calculations on the fly for the user, or you can access, search, and filter a database based on user input.

## Defining a function

Below is an example function, demonstrating the syntax to use in your chatbot script file. We recommend that you put functions at the top of your file.

```text
> object getRandomNumber javascript
  return Math.random();
< object
```

The function is called `getRandomNumber` and we include the word `javascript` to indicate that the function is written in javascript. The `object` tag syntax encloses the function. Notice that something is returned to be used by the chatbot. In this case, it is a random number.

## Accessing the Function

In order to use the function in your chat script, you use the `<call>` tag like below.

```text
+ [*]random[*]
- Here is your random number: <call>getRandomNumber</call>
```

If the user says "Random number please" \(the trigger\), the `getRandomNumber` function is called and the returned random number will be the response.

> User: Random number please.
>
> Bot: Here is your random number: 0.874612

## Passing Arguments to a Function

A function can also accept _arguments_ or inputs. See the example below.

```text
> object getSquared javascript
  var input = Number(args[0]);
  return input*input;
< object
```

The argument passed to the function is accessed by `args[0]`. If there were a second argument \(like two numbers to be added\) you would access it with `args[1]`. `args` is an array.

In order to use a function that accepts arguments, you place those values after the function name, like below.

```text
+ square *
- <star> squared is <call>getSquared <star></call>
```

Notice that we are using the user's input as our argument--a number in this case--using the `<star>` tag.

> User: square 4
>
> Bot: 4 squared is 16

