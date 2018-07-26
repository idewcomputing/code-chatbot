# Placing JS Functions in your Main JS File

**For your chatbot we recommend that you place the bulk of your Javascript work in a proper Javascript file.** For example, your chatbot script file may have the following function.

## An Example...

```text
> object getRandomTerm javascript
  return getRandomTerm();
< object
```

Notice how this will run another function, like the one below, that can be in your _code.js_ file.

```javascript
function getRandomTerm() {
  var randomIndex = Math.floor(Math.random() * database.length);
  currentItem = database[randomIndex]
  return currentItem.term;
}
```

Placing JavaScript in a proper `.js` file produces the familiar code highlighting that makes it much easier to write, edit, and debug.

