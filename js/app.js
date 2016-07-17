// jQuery and magic.css
$(document).ready(function() {
  $(".headline").addClass('magictime puffIn');

  $("modal1").click(function() {
    $("#myModal").modal({
      backdrop: true
    });
  });
});
