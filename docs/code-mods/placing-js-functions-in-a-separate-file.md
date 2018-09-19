# Placing JS Functions in your Main JS File

**For your chatbot we recommend that you place the bulk of your Javascript work in a proper Javascript file and keep your Rivescript "objects" very simple.**

## An Example...

Your _Rivescript_ file could simply call a Javascript function like below.

{% code-tabs %}
{% code-tabs-item title="Rivescript" %}
```javascript
> object getRandomTerm javascript
  return getRandomTerm();
< object

+ random
- Finding a random term... <call>getRandomTerm</call>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Notice how this will run the `getRandomTerm()` function, like the one below, that can be in your _code.js_ file.

{% code-tabs %}
{% code-tabs-item title="Javascript" %}
```javascript
function getRandomTerm() {
  var randomIndex = Math.floor(Math.random() * chatbot.db.length);
  currentItem = chatbot.db[randomIndex]
  return currentItem.term;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

**The chain of returns:** The Javascript function will _return_ the "term" \(in this case\) to the Rivescript object, which will then return that value to your script file

{% hint style="info" %}
**Placing JavaScript in a proper `.js` file produces the familiar code highlighting that makes your code much easier to write, edit, and debug.**
{% endhint %}

