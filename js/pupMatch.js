var main = function () {

  var $showNavBtn = $(".show-nav-btn");
  var $primaryNav = $(".primary-nav");
  $showNavBtn.on("click", function() {
    console.log('click');
    $primaryNav.slideToggle("normal", function() {
      if ($primaryNav.is(":visible") ) {
          $showNavBtn.text("Hide Navigation");
      }
      else {
        $showNavBtn.text("Show Navigation");
      }
    });
  });

};

$(document).ready(main);
