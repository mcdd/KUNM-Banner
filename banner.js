var highlight_random = function() {
  $("#banner > span.fg").removeClass("fg");
  spans = $("#banner > span");
  idx = Math.floor(Math.random()*spans.length);
  spans.slice(idx, idx+1).addClass("fg");
};

var rx_programs_cb = function(data, textStatus, jqXHR) {
  programs = data.split("\n").slice(0, -1).sort();
  for(i=0; i<programs.length; i += 1) {
    $("#banner").append("<span>"+programs[i].slice(0, -1).replace(/ /g, "&nbsp;")+"</span> &emsp;");
  }
  highlight_random();
  setInterval("highlight_random()", 3000);
};

$(function() {
  $.get("programs.txt", null, rx_programs_cb, "text");
});
