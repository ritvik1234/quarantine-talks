$(function () {
  if ($.cookie("quarantine-talks-nickname")) {
    window.location = "/"
  } else {
    $("#frm-login").submit(function (event) {
      event.preventDefault();
      if ($("#nickname").val() !== '') {
        $.cookie("quarantine-talks-nickname", $("#nickname").val());
        window.location = "/";
      }
    })
  }
})
