//iDEW chatbot library

var bot;

var chatbot = {
  db: [],
  loadDB: function(link) {
    Tabletop.init({
      key: link,
      callback: data => {
        this.db = data["Sheet1"].elements;
        console.log("Your Database Rows Loaded: ", this.db.length);
      }
    });
  },
  loadFiles: function(filenames) {
    bot = new RiveScript();
    bot.loadFile(filenames).then(on_load_success).catch(on_load_error);
  },
  getReply: function(text) {
    bot.reply(null, text).then(
      reply => {
        reply = reply.replace(/\n/g, "<br>");
        this.postReply(reply);
      },
      reason => {
        console.log(reason);
      }
    );
  },
  postReply: function(reply, delay) {
    if (!delay) delay = 800;
    var rand = Math.round(Math.random() * 10000);
    setTimeout(function() {
      $("#dialogue").append(
        "<div class='bot-row' id='" +
          rand +
          "'><span class='bot'>" +
          reply +
          "</span></div>"
      );
      if (typeof pop !== "undefined") pop.play();
      if (typeof onChatbotReply === "function") onChatbotReply();
      $("#" + rand)
        .hide()
        .fadeIn(200);
      $("#dialogue").animate(
        { scrollTop: $("#dialogue")[0].scrollHeight },
        200
      );
    }, delay);
  },
  sendMessage: function() {
    var text = $("#message").val();
    if (text.length === 0) return false;
    $("#message").val("");
    $("#dialogue").append(
      "<div class='user-row'><span class='user'>" +
        this.escapeHtml(text) +
        "</span></div>"
    );
    $("#dialogue").animate({ scrollTop: $("#dialogue")[0].scrollHeight }, 200);
    this.getReply(text);
    return false;
  },
  escapeHtml: function(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
};

function on_load_success() {
  $("#message").removeAttr("disabled");
  $("#message").attr("placeholder", "Message");
  //$("#message").focus();
  bot.sortReplies();
  chatbot.getReply("start");
}

function on_load_error(err) {
  chatbot.postReply(
    "Yikes, there was an error loading this bot. Refresh the page please."
  );
  console.log("Loading error: " + err);
}
