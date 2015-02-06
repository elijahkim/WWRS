$(function() {
  var displayText = function(text) {
    $(".quote").text(text);
  };

  var quote = $.ajax({
    url: "http://ron-swanson-quotes.herokuapp.com/quotes",
  });

  quote.done(displayText(quote));
  console.log(quote);
});
