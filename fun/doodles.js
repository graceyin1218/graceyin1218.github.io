var record = "https://graceyin1218.github.io/fun/doodles/_record.txt";

var dir = "https://graceyin1218.github.io/fun/doodles/"

$(document).ready(function() {
//  $.ajax({
//    url:dir, 
//    success: function(data) {

      $.get(record, function(data, status) {
        var images = data.split(/\n/);
        for (image of images) {
          $("body").append("<img src='" + dir + image + "'>");
        }
      });

    /*
      $(data).find("a").attr("href", function(i, val) {
        console.log(val);
        if (val.match(/\.(jpe?g|png|gif$/) ) {
          $("body").append("<img src='" + folder + val + "'>");
        }
      });
    */
    /*$(data).find("a:contains(" + fileextension + ")").each(function() {
      var filename = this.href.replace(window.location, "").replace("http://", "");
      $("body").append("<img src='" + dir + filename + "'>");
    });
    */

//    }
//  });
});

