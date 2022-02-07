$(document).ready(function() {
	var about = $('#aboutMe').offset().top;
	var project = $('#project').offset().top;
	var skill = $('#skill').offset().top;
	var contact = $('#contact').offset().top;
    $(window).scroll(function() {
    if ($(window).scrollTop() + 100 <= skill) {
      $('#aboutMeLnk').addClass("selectedMenuItem");
      $('#projectLnk').removeClass("selectedMenuItem");
      $('#skillLnk').removeClass("selectedMenuItem");
      $('#contactLnk').removeClass("selectedMenuItem");
    }
	else if ($(window).scrollTop() + 100 <= project) {
      $('#aboutMeLnk').removeClass("selectedMenuItem");
      $('#skillLnk').addClass("selectedMenuItem");
      $('#projectLnk').removeClass("selectedMenuItem");
      $('#contactLnk').removeClass("selectedMenuItem");
    }
	else if ($(window).scrollTop() + 100 <= contact) {
      $('#aboutMeLnk').removeClass("selectedMenuItem");
      $('#skillLnk').removeClass("selectedMenuItem");
      $('#projectLnk').addClass("selectedMenuItem");
      $('#contactLnk').removeClass("selectedMenuItem");
    }
	else {
      $('#aboutMeLnk').removeClass("selectedMenuItem");
      $('#projectLnk').removeClass("selectedMenuItem");
      $('#skillLnk').removeClass("selectedMenuItem");
      $('#contactLnk').addClass("selectedMenuItem");
    }
});

$(document).scroll(function () {
  var $nav = $(".navbar-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

  $(".navigation a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});
