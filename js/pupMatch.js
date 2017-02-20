var main = function () {

  var $showNavBtn = $(".hamburger-btn");
  var $primaryNav = $(".primary-nav");
  $showNavBtn.on("click", function() {
    console.log('click');
    $primaryNav.slideToggle("normal", function() {
      if ($primaryNav.is(":visible") ) {
          $showNavBtn.text("Hide Menu");
      }
      else {
        $showNavBtn.text("Show Menu");
      }
    });
  });

};

$(document).ready(main);
