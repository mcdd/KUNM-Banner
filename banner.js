var rx_programs_cb = function(data, textStatus, jqXHR) {
  programs = data.split("\n");
  for(i=0; i<programs.length; i += 1) {
    $("#banner").append("<span>"+programs[i].slice(0, -1).replace(/ /g, "&nbsp;")+"</span> &emsp;");
  }
};

$(function() {
  $.get("programs.txt", null, rx_programs_cb, "text");
});
