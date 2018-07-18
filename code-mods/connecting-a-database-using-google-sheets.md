# Connecting a Database Using Google Sheets

## Include the Tabletop.js Library in the HTML

Add the following to your `index.html` file in the `<head>` element . Placing it just before the `jquery` script element would be a good place.

```markup
<script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
```

## Load the Spreadsheet Data in Your JavaScript

Add the following to your `code.js` file inside the `setup()` function. You can place it at the top.

```javascript
Tabletop.init({
    key:
      "https://docs.google.com/spreadsheets/d/1rR9ODzcTYv95dYGal-ZXBRp3wgp0I7fbKIk5I2hJkgI/edit?usp=sharing",
    callback: data => {
      database = data["Sheet1"].elements;
      //console.log(database); //use this to check that data is loaded correctly
    }
  });
```

You will need to change the `key` value to the link provided by your Google sheet. Uncomment the `console.log` statement to see if your data is getting received.

Go to [A Round Trip to th Database](a-round-trip-to-the-db-and-back.md). to see an example of how to use a function and a database with your chatbot script.

