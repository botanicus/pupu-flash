// var flash = new Flash("msg", {duration: "small"});
// <div class="msg" id="error"></div>
Flash = new Class({
  message: function(id, text) {
    var element = $(id);
    if (element) {
      var slide = new Fx.Slide(element);
      slide.hide();
      element.set("html", text);
      slide.slideIn();
      (function() { slide.slideOut() }).delay(2500);
    } else {
      alert(text);
    }
  },

  error: function(text) {
    this.message("msg-error", text);
  },

  notice: function(text) {
    this.message("msg-notice", text);
  },
});
