# Storing Data for a User

## The Rivescript Way

Rivescript offers a way to store data in your chatbot. For example, you could use the following script.

```diff
+ my name is *
- <set name=<star>>It's nice to meet you, <get name>.

+ what is my name
- Your name is <get name>, silly!
```

 For a more detailed explanation go [here](https://www.rivescript.com/docs/tutorial#learning-things).The only limitation is that it only stores the name for the duration of the browser session. In other words if the user leaves your chatbot and comes back another time, his or her name will not be _remembered_ \(or stored\) by the chatbot. The next way uses Javascript localStorage to store the data for longer periods.

## The Javascript `localStorage` Way

Using this method we can store information that will remain in the browser, even after a browser refresh. \(Unless the user clears the browser cache, which is not typical.\) First let's create some Javascript functions in our Rivescipt file to store, get, or clear a user's name.

```javascript
> object storeName javascript
  localStorage.setItem("name", args[0]);
< object

> object getName javascript
  var name = localStorage.getItem("name");
  if (name) return name;
  else return "what is your name?"
< object

> object clearName javascript
    localStorage.removeItem("name");
    return "Name removed.";
< object
```

Learn more about localStorage in Javascript [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Next, create the script needed to use these functions, like below.

```diff
+ start // "start" autostarts the bot conversation 
- Hello, <call>getName</call>

+ *
% hello what is your name
- <call>storeName <formal></call>Nice to meet you <call>getName</call>

+ clear
- <call>clearName</call>
```

{% hint style="info" %}
You may have noticed that we used `<formal>` instead of `<star>` in line 6 to represent the user's input. The only difference between the two is that `<formal>` maintains any capitalization the user would use. This is useful in this case since we expect that most names begin with a capital letter.
{% endhint %}

You can modify the examples above to store and retrieve different information.  

