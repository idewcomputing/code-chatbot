# Placing JS Functions in a Separate File

**For your chatbot we recommend that you place the bulk of your Javascript work in a separate file.** For example, your chatbot script file may have the following function.

## An Example...

```text
> object getRandomTerm javascript
  return getRandomTerm();
< object
```

Notice how this will run another function, like the one below, that can be in another file \(like `customFunctions.js`\) that is strictly JavaScript.

```javascript
function getRandomTerm() {
  var randomIndex = Math.floor(Math.random() * database.length);
  currentItem = database[randomIndex]
  return currentItem.term;
}
```

Also, be sure to add the needed html to load your JS functions, like below.

```markup
<script src="customFunctions.js"></script>
```

We recommend this for at least two reasons. First, it places JavaScript functions in a separate file, keeping your chatbot script from getting really large. You want to keep your script files clean and organized. Second, placing JavaScript in a proper `.js` file produces the familiar code highlighting that makes it much easier to write, edit, and debug.

