var record = "https://raw.githubusercontent.com/graceyin1218/graceyin1218.github.io/master/fun/doodles/_record.txt";

var dir = "https://raw.githubusercontent.com/graceyin1218/graceyin1218.github.io/master/fun/doodles/"; 

$(document).ready(function() {
      $.get(record, function(data, status) {
        var images = data.split(/\n/);
        for (image of images) {
          $("body").append("<a href='" + dir + image + "'><img src='" + dir + image + "' width='100'></a>");
        }
      });
});

