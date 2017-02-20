var main = function () {

  // var $showNavBtn = $(".hamburger-btn");
  var $primaryNav = $(".primary-nav");
  var $hamburgerWrapper = $(".hamburger-wrapper");
  var $menuTxt = $(".menu-txt");

  $hamburgerWrapper.on("click", function() {
    console.log('click');
    $primaryNav.slideToggle("normal", function() {
      if ($primaryNav.is(":visible") ) {
          $menuTxt.text("Hide Menu");
      }
      else {
        $menuTxt.text("Show Menu");
      }
    });
  });

};

$(document).ready(main);
