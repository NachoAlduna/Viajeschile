$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("el mensaje se ha enviado");
  });
  $(".smooth-scroll").click(function (e) {
    var target = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    ); // Adjust the scrolling speed (in milliseconds)
    e.preventDefault();
  });
});
