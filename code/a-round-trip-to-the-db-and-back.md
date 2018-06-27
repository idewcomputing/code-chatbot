# A Round Trip to the DB and Back

Let's look at how you could access your database from a chatbot interaction. We'll use an example that allows the user to get quizzed on a glossary of terms in a database. There is a lot going on here, but take your time to understand the logic of what is going on.

## Here is the database table.

| id | term | definition | keywords |
| --- | --- | --- | --- |
| 0 | Supervised Learning | Supervised learning is the machine learning task of inferring a function from labeled training data. | labeled, training |
| 1 | Unsupervised Learning | Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. | no labels, inferences |
| 2 | Reinforcement Learning | Reinforcement learning \(RL\) is an area of machine learning inspired by behaviorist psychology, concerned with how software agents ought to take actions in an environment so as to maximize some notion of cumulative reward. | reward, maximize |
| 3 | Perceptron | In machine learning, the perceptron is an algorithm for supervised learning of binary classifiers. | classifier, binary, classify |

If the correct HTML and JS is included, as described at the beginning of this page, the `database` variable in JavaScript will hold all of the columns of the spreadsheet in an array of objects.

## JavaScript array of objects

```javascript
[
  {
    id: "0",
    term: "Supervised Learning",
    definition:
      "Supervised learning is the machine learning task of inferring a function from labeled training data.",
    keywords: "labeled, training"
  },
  {
    id: "1",
    term: "Unsupervised Learning",
    definition:
      "Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses.",
    keywords: "no labels, inferences"
  },
  {
    id: "2",
    term: "Reinforcement Learning",
    definition:
      "Reinforcement learning (RL) is an area of machine learning inspired by behaviorist psychology, concerned with how software agents ought to take actions in an environment so as to maximize some notion of cumulative reward. ",
    keywords: "reward"
  },
  {
    id: "3",
    term: "Perceptron",
    definition:
      "In machine learning, the perceptron is an algorithm for supervised learning of binary classifiers.",
    keywords: "classifier, binary, classify"
  }
]
```

Notice that it is the same information as the spreadsheet, just in a different format.

## Now, here is a portion of a chatbot script file that will access the database using a JS function.

```text
  > object getRandomTerm javascript
    var randomIndex = Math.floor(Math.random() * database.length);
    var currentItem = database[randomIndex]
    return currentItem.term;
  < object

  + quiz me
  - What is <call>getRandomTerm</call>?
```

Let's unpack what is happening here.

* The user says "quiz me" to trigger the bot. 

_Working from the inside-out on the response..._ 

* The `<call>getRandomTerm</call>` calls the JS function in our `object`. 
* The function gets a random number between 0 and the total number of terms in the database \(`database.length`\). 
* Next the function gets that glossary term data \(`database[randomIndex]`\) and assigns it to the `currentItem` variable, which is a single object like this:

  ```text
  {
    id: "2",
    term: "Reinforcement Learning",
    definition:
      "Reinforcement learning (RL) is an area of machine learning inspired by behaviorist psychology, concerned with how software agents ought to take actions in an environment so as to maximize some notion of cumulative reward. ",
    keywords: "reward"
  }
  ```

* Then the function returns the actual text of that term \(`currentItem.term`\).
* Now, back in the response script line \(the line starting with `-`\), the text of that term is inserted where the `<call>` resides.

## So the interactions could be like this.

> User: quiz me Bot: What is Reinforcement Learning?

Wow. That's a lot of work for such a short dialogue. But now you could have one of 10,000 terms randomly displayed to the user.

If you want to see how you could then check the users response to the question, take a look at the [Chatbot Mods CodePen](https://codepen.io/jlyst/project/editor/ZGgQjm#) and dig around in the code.

