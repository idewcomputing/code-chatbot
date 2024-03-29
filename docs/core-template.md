# Getting Started

{% embed url="https://www.loom.com/share/11223bfc18be4730a9378a33f55edfbb" %}

The code below will get you started with the iDEW chatbot template. It is a minimum starting point for a working chatbot that you will later modify and refine towards your design goals. There is a **** [**live example**](https://chatbot2018--jimlyst.repl.co) which doesn't do anything exciting -- that's up to you to change.

## HTML

Below is the core html for the chatbot. The _div_ element with an _id="dialogue"_ is the block that contains the back-and-forth messages like you see in common messaging interfaces. The _form_ element handles the user's text input at the bottom of the interface.&#x20;

The required libraries are also loaded. _PapaParse.js_ enables you to use a back-end database using Google Sheets. _JQuery_ is a common library for Javascript programmers. _Rivescript_ is the chatbot scripting language you will use (more on this later). _Chatbot.js_ is the iDEW library that makes your programming easier.

{% hint style="info" %}
**Update February 11, 2022**: The PapaParse library is now used, instead of the Tabletop library, to **optionally** import data from a spreadsheet. The change is seen at line 21 below.
{% endhint %}

{% code title="HTML - (index.html)" %}
```markup
<!DOCTYPE html>
<html>

<head>
  <title>iDEW Chatbot</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
  <div class='wrapper'>
    <div id="dialogue"></div>
    <form onSubmit="return chatbot.sendMessage()">
      <div class="text-box">
        <input type="text" name="message" id="message" autocomplete="off" disabled placeholder="Please wait... loading...">
        <input class="send-button" type="submit" value=">">
      </div>
    </form>
  </div>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
  <script src="https://unpkg.com/rivescript@latest/dist/rivescript.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/idewcomputing/code-chatbot/src/chatbot.js"></script>
  <script src="script.js"></script>
</body>

</html>
```
{% endcode %}

## Javascript

Below is the minimal Javascript needed to get started. The `setup ()`function starts automatically once the page loads in the browser and simply loads the _Rivescript_ file as your chatbot script to get things started.

{% code title="JS (script.js)" %}
```javascript
function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;
```
{% endcode %}

## Rivescript

The script below determines how your chatbot will converse with a visitor. The `+ start` is automatically started to get the conversation going. The `+ *` is a wildcard that catches anything that you have not programmed your chatbot to recognize. At first your chatbot recognizes little, but we will work on that soon.

{% code title="Rivescript (bot.rive)" %}
```javascript
// conversation script is below
// "start" auto-runs to begin the bot conversation 

+ start 
- Hello. I am a brand new bot with little to say.

+ *
- Sorry, I don't understand that.
```
{% endcode %}

## CSS

There is a lot going on here with the styling of the chatbot. Use the code below as your starting point, but you may choose to change some elements later. A simple way to customize the look would be to change the _background_, _font-family_, and _color_ of the body element.

{% code title="CSS (style.css)" %}
```css
body {
  background: linear-gradient(#A90329, #6d0019);
  font-family: Verdana,Arial,Helvetica,sans-serif;
  font-size: small;
  color: #000000;
  padding: 0;
  margin: 0;
  line-height: 1.7em;
}

button {
  background-color: rgba(255,255,255,.5);
  padding: 5px;
  outline: none;
  border: 1px solid rgba(0,0,0,.3);
  border-radius: 5px;
}

.wrapper {
  max-width: 450px;
  height: 100vh;
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  background-color: rgba(255,255,255,.1);
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255,255,255,.2);
  border-right: 1px solid rgba(255,255,255,.2);
}

form {
  flex: 5;
  display: block;
  padding: 15px;
}
.text-box {
  font-size: 16px;
  display: flex;
  width: 100%;
}
input#message {
  padding-left: 11px;
  padding-right: 9px;
  font-size: 16px;
  height: 27px;
  display: block;
  flex: 10;
  outline: none;
  margin: 0 10px 0 0;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 13px;
}

input.send-button {
  display: block;
  background-color: rgba(255,255,255,.6);
  flex: 1;
  border: 1px solid rgba(0,0,0,.2);
  height: 27px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 25px;
  padding: 0;
  border-radius: 13px;
}

div#dialogue {
  overflow-x: none;
  overflow-y: auto;
  display: block;
  flex: 95;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
}

.bot-row, .user-row {
  padding: 1px 0 10px 0;
  display: block;
  postion: relative;
}
.user-row {
  text-align: right;
}

.user, .bot {
  font-size: 16px;
  padding: 5px 8px;
  margin: 1px;
  border-radius: 12px;
  display: inline-block;
  postion: relative;
}
.bot {
  margin-right: 50px;
  background-color: rgba(255,255,255,.85);
  border-bottom-left-radius: 0;
}
.user {
  margin-left: 50px;
  color: white;
  background-color: #3b3; 
  border-bottom-right-radius: 0;
}
```
{% endcode %}
