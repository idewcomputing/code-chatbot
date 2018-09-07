# Add Sound Effects

Let's add a simple _pop_ sound effect when a message is sent by the chatbot.

{% file src="../.gitbook/assets/pop.mp3" caption="pop.mp3" %}

First, download the mp3 file above of a _pop_ sound. Alternatively, you could find or create your own sound if you like. Place the file in the same folder as your code files.

Add the following line to the very top of your Javascript to define a _global variable_ for your sound. This will allow your code and the iDEW trivia library to use your sound.

```javascript
var pop;
```

Add the following line of code inside your `setup()` function. This will load your sound file so that it can be played later.

```javascript
pop = new Audio('pop.mp3');
```

That is actually all you need to do. It should work for you now. The iDEW chatbot library actually plays the pop sound \(that you have made available\) when the chatbot responds to a message.

