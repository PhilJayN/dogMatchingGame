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




var app = {
  cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
  init: function() {
    // this.test();
    this.shuffle();
  },

  test: function() {
    console.log('test method running!');
  },

  randomNum: function() {
    var random = 0;     //set this to just undefined instead?
    for (var i = 2; i <=3; i++) {
      console.log(i);
    }
  },

  shuffle: function() {
    var random = 0;
    var temp = 0;
    // console.log('cards arr length', this.cards.length);
    debugger;
    for (var i = 1; i < this.cards.length; i++) {
      random = Math.round(Math.random() * i);
      console.log('random', random);
    }
    // return random;

  }

    // var random = 0;
    // var temp = 0;
    // for (i = 1; i < cards.length; i++) {
    //   random = Math.round(Math.random() * i);
    // }
    // console.log('Math.random() = ', Math.random());
    // console.log('Math.random() * ', i, Math.random());

  // console.log(cards);

};


// console.log(app.init());
// console.log(app.cards[10]);
// console.log(app.shuffle());


app.test();



$(document).ready(main);
