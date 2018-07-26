# Placing JS Functions in your Main JS File

**For your chatbot we recommend that you place the bulk of your Javascript work in a proper Javascript file.** For example, your chatbot script file may have the following function.

## An Example...

Your _Rivescript_ file could simply call a Javascript function like below.

{% code-tabs %}
{% code-tabs-item title="Rivescript" %}
```javascript
> object getRandomTerm javascript
  return getRandomTerm();
< object
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Notice how this will run the `getRandomTerm()` function, like the one below, that can be in your _code.js_ file.

{% code-tabs %}
{% code-tabs-item title="Javascript" %}
```javascript
function getRandomTerm() {
  var randomIndex = Math.floor(Math.random() * database.length);
  currentItem = database[randomIndex]
  return currentItem.term;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% hint style="info" %}
**Placing JavaScript in a proper `.js` file produces the familiar code highlighting that makes your code much easier to write, edit, and debug.**
{% endhint %}

