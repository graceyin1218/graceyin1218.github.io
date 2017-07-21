var dir = "doodles/";

var fileextension = ".JPG";
$(document).ready(function() {
  $.ajax({
    url:dir, 
    success: function(data) {
      $(data).find("a").attr("href", function(i, val) {
        if (val.match(/\.(jpe?g|png|gif$/) ) {
          $("body").append("<img src='" + folder + val + "'>");
        }
      });
    
    /*$(data).find("a:contains(" + fileextension + ")").each(function() {
      var filename = this.href.replace(window.location, "").replace("http://", "");
      $("body").append("<img src='" + dir + filename + "'>");
    });
    */

    }
  });
});

