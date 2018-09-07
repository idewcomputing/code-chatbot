# Using Topics

There are a couple of ways you could add topics to your chatbot. But we recommend you do it the following way if you are working in teams.

Remember that you can always access the [reference material for RiveScript](https://www.rivescript.com/docs/tutorial#topics) to understand them more. 

**1. Create separate chatbot script files for each topic.** In addition to your main script file \(_bot.rive_\) create files like _bot-topic-1.rive_ and _bot-topic-2.rive_ for your topics.

 **2. Place topic tags in each of the new files** with the script embedded like this.

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

**3. Include an entry point to the new topics** in your main chatbot script file using something like this, where the bot goes to the new topic if the visitor types "go to topic 1".

```text
   + go to topic 1
   - {topic=1} {@ start}
```

The `{@ start}` triggers the new topic's `+ start` line. So in this case the chatbot would respond to "go to topic 1" with "Greetings from topic 1".

**4. Lastly, have the javascript load your new files.** Find the `chatbot.loadFiles` function in your `code.js` file and add your new files like below.

```text
chatbot.loadFiles(['bot.rive', 'bot-topic-1.rive', 'bot-topic-2.rive']);
```

> You will definitely want to customize and refine the scripts above, but you should be on your way.

