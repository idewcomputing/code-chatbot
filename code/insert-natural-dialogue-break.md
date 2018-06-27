# Insert Natural Dialogue Break

If you would like to add some more natural breaks to your chatbot's dialogue, you can use the code samples outlined here.

In the image below, the change seen on the right demonstrates the improvement offered by this code modification. There is a slight pause between each dialogue bubble too. ![](../.gitbook/assets/chatcompare.png)

1. **Replace your** `postReply()` **function with the function below.**

   ```javascript
   function postReply(reply, delay) {
   if (!delay) delay = 800;
   var replyArray = reply.split('<br>');
   var rand = Math.round(Math.random() * 10000);
   setTimeout(function() {
    $("#dialogue").append(
      "<div class='bot-row' id='" +
        rand +
        "'><span class='bot'>" +
        replyArray[0] +
        "</span></div>"
    );
    replyArray.shift();
    if (replyArray.length) postReply(replyArray.join('<br>'))
    pop.play();
    $("#" + rand)
      .hide()
      .fadeIn(200);
    $("#dialogue").animate({ scrollTop: $("#dialogue")[0].scrollHeight }, 200);
   }, delay);
   }
   ```

2. **Use** `\n` **or** `<br>` **in your chatbot script where you want a natural break in your chatbot's replies.** Example below using both ways, which produce an equivalent result.

```markup
 + start
 - ML_bot here. I am a demonstration bot that encourages interest in Machine Learning and AI. <br> {@ help}
```

```markup
+ start
- ML_bot here. I am a demonstration bot that encourages interest in Machine Learning and AI. \n {@ help}
```

