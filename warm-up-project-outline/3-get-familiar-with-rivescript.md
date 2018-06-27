# 3 Get Familiar with Rivescript

## Objective

Develop a chatbot script that demonstrates several useful features and patterns in programming a conversation.

## Instructions

Let's get familiar with the syntax of RiveScript and how it will provide the logic of your chatbot. For each item below carefully look at the documentation for RiveScript to understand the options available to you as you determine what is possible with your chatbot.

1. **Create four** [**random replies**](https://www.rivescript.com/docs/tutorial#random-replies) **to "hello" for your chatbot.**
2. **Define a single trigger \(a trigger is the user input that starts with a "+" in the script\) that will respond to these two user questions** - "What do you do?" or "What can you do?" with an bot answer that you choose. For example, you could respond to the user with "I do very little at the moment." Hint: use the ["alternatives and optionals" in RiveScript](https://www.rivescript.com/docs/tutorial#alternatives-and-optionals).
3. Use [a redirection](https://www.rivescript.com/docs/tutorial#redirections) to your "Hello" trigger when the user inputs "Hey".
4. **Create a reply to "My name is Sue" \(or any name\).** In your chatbot response, use the person's name---like, "Nice to meet you Sue, my name is ChattyBot." Hint: Use an [open-ended trigger with a wildcard](https://www.rivescript.com/docs/tutorial#open-ended-triggers).
5. **Have your bot kick-off the conversation with a question when it starts.** Notice how the [iDEW chatbot](https://3f4f14cf84904c39b800c0f021944c18.codepen.website/) starts with a `yes or no` question. Also, add the needed script to listen for a response to that question and respond. Take a look at [this example on short discussions](https://www.rivescript.com/docs/tutorial#short-discussions).
6. **Use the following object macro to allow the user to request the addition of two numbers.** Try it out to make sure it works.

   > &gt; object add javascript
   >
   > // Demonstrates that JS objects can return numbers.
   >
   > var a = args\[0\];
   >
   > var b = args\[1\];
   >
   > return parseInt\(a\) + parseInt\(b\);
   >
   > &lt; object
   >
   > * add \# and \#
   > * `<star1> + <star2> = <call>add <star1> <star2></call>`

7. **Finally, find two other features of RiveScript syntax to implement in your bot.**

## ✓ Deliverable

Update your chatbot script in the [Chatbot Scripts Google form](https://goo.gl/forms/ZgVAUlKL8wCVb2zE3) to make it accessible through the [iDEW chatbot](https://3f4f14cf84904c39b800c0f021944c18.codepen.website/).

