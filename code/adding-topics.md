# Adding Topics

There are a couple of ways you could add topics to your chatbot. But we recommend you do it the following way if you are working in teams.

Remember that you can always access the [reference material for RiveScript](https://www.rivescript.com/docs/tutorial#topics) to understand them more. Also check out the [Chatbot Mods CodePen](https://codepen.io/jlyst/project/editor/ZGgQjm#) for live examples.

**1. Create separate chatbot script files for each topic.** If you are using Editey you will want to keep your main chatbot script, likely called `chatbotRivescript.html`. Then add files for each topic like `chatbotRivescript_topic1` `chatbotRivescript_topic2` `chatbotRivescript_topic3`. NOTE: We add the .html extension to our chatbot scripts for easy access in Editey. They aren't actually `HTML`. **2. Place topic tags in each of the new files** with the script embedded like this.

```text
  > topic 1
    + start
    - Greetings from topic 1.

    + (hello|hi)[*]
    - Hi, you are in topic 1.

    + bye
    - {topic=random} OK. I'll send you back to the main script.{@ start}

  < topic
```

**3. Include an entry point to the new topics** in your main chatbot script file using something like this.

```text
   + go to topic 1
   - {topic=1} {@ start}
```

The `{@ start}` triggers the new topic's `+ start` line. So in this case the chatbot would respond to "go to topic 1" with "Greetings from topic 1".

**4. Lastly, have the javascript load your new files.** Find the `rs.loadFile` function in your `code.js` file and add your new files like below.

```text
rs.loadFile(["chatbotRiveScript.html","chatbotRiveScript_topic1.html","chatbotRiveScript_topic2.html","chatbotRiveScript_topic3.html"], on_load_success, on_load_error);
```

> You will definitely want to customize and refine the scripts above, but you should be on your way.

