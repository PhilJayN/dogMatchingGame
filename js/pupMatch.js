// var main = function() {


var app = {

    init: function() {
        this.shuffle();
    },
    cards: [
        "images/gamePics/yorkie-beach-footprints.jpg", "images/gamePics/yorkie-beach-footprints.jpg",
        "images/gamePics/yorkie-clothes-shoes.jpg", "images/gamePics/yorkie-clothes-shoes.jpg",
        "images/gamePics/yorkie-driving.jpg", "images/gamePics/yorkie-driving.jpg",
        "images/gamePics/yorkie-next-to-flowers.jpg", "images/gamePics/yorkie-next-to-flowers.jpg",
        "images/gamePics/yorkie-sitting.jpg", "images/gamePics/yorkie-sitting.jpg",
        "images/gamePics/yorkie-sleeping.jpg", "images/gamePics/yorkie-sleeping.jpg"
    ],

    //returns a shuffled cards array
    shuffle: function() {
        var random = 0;
        var temp = 0;
        var cardsArrLen = this.cards.length;
        for (var i = 1; i < cardsArrLen; i++) {
            random = Math.round(Math.random() * i);
            temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
        console.log('shuffled cards: ', this.cards);
        this.assignData();
    },

    // assign each img a data- value frm cards arr
    assignData: function() {
        var $card = $('.card');
        console.log('assignDatcards: ', app.cards);

        $card.each(function(index) {
            $(this).attr('data-card-value', app.cards[index]);
        });
        this.clickAssignImage();
    },

    // pairMatched: function () {
    //   var count = 0;
    // },

    //changes the img src of clicked element using data-card-value
    //then Adds class selected to the element clicked.
    clickAssignImage: function() {
        //this is whatever element you click on:
        var $card = $('.card');
        var count = 0;
        var test = 'test here!';
        // var $selected = $('.selected');
        $card.off().on('click', function() {
              $(this).addClass('selected');
              if ($('.selected').length < 3 ) {
                //get data-card-value inside data:
                // console.log('data-card-value inside data', $(this).attr('data-card-value'));
                $(this).attr('src', $(this).attr('data-card-value'));
                console.log('selected len', $('.selected').length);
            }

            if ($('.selected').length === 2) {
                if ($('.selected').first().attr('data-card-value') === $('.selected').last().attr('data-card-value')) {
                    $('.selected').each(function() {
                        $(this).animate({
                            opacity: 0
                        }).removeClass('unmatched').removeClass('selected');
                    });
                    count++;
                    console.log('count', count);
                    // app.checkWin();
                } else {
                    setTimeout(function() {
                        $('.selected').each(function() {
                            $(this).attr('src', "images/gamePics/blue-gradient.jpg").removeClass('selected');
                        });
                    }, 800);
                }
            }

            // count = 6;
            if (count === 6) {
              var $modal = $(".modal");
              console.log('you win!');
              setTimeout(function() {
                $modal.show();
              }, 600);

            }

        });

        return {
          test: test,
          count: count,
          $card: $card,
        };
    },

    test: function () {
      console.log('return val', this.clickAssignImage().test);
    },

    // checkMatch: function() {
    //     var $selected = $('.selected');
    //
    // },

    // checkWin: function() {
    //     if ($('.unmatched').length === 0) {
    //         alert("Great job!");
    //     }
    // },

    resetGame: function() {
        // console.log('resetGame method running');
        $('.card').each(function() {
            $(this).removeAttr('data-card-value').attr('src', "images/gamePics/blue-gradient.jpg").animate({
                opacity: 100
            }).removeClass('selected');
        });
        app.shuffle();
    },

    //auto win game for debugging!
    autoWin: function() {
        // $('.column-1').children('img').removeClass('unmatched');
        // this.checkWin();

    },

};

app.init();

//}; //end of main function
// $(document).ready(main);



var handlers = {

    hamburger: (function() {
        var $primaryNav = $(".primary-nav");
        var $hamburgerWrapper = $(".hamburger-wrapper");
        var $menuTxt = $(".menu-txt");

        $hamburgerWrapper.on("click", function() {
            $primaryNav.slideToggle("normal", function() {
                // if ($primaryNav.is(":visible")) {
                //     $menuTxt.text("Hide Menu");
                // } else {
                //     $menuTxt.text("Show Menu");
                // }
            });
        });

        var $contactSiteCreator = $(".contact-site-creator");

        $contactSiteCreator.on("click", function() {
            $primaryNav.slideToggle("normal", function() {
            });
        });

    })(),

    modal: (function () {
      var $modal = $(".modal");
      var $openModalBtn = $(".open-modal-btn");
      var $modalExit = $(".modal-exit");

      $openModalBtn.on("click", function () {
        console.log('clicked opened modal');
        $modal.show();
      });

      $modalExit.on("click", function () {
        console.log('cliced exit modal');
        $modal.hide();
      });
    })(),

    game: (function() {
        var $playGameBtn = $(".play-game-btn");
        var $gameWrapper = $(".game-wrapper");

        $playGameBtn.on("click", function() {
            console.log('click play game');
            $gameWrapper.slideToggle("normal", function() {

                if ($gameWrapper.is(":visible")) {
                    $playGameBtn.text("Hide Game");
                } else {
                    $playGameBtn.text("Play Game");
                }
            });
        });
    })(),

    reset: (function () {
      var $resetGameBtn = $('.reset-game-btn');
      $resetGameBtn.on("click", function(){
        //ask for confirm first:
        // alert('This will reset your progress and start a new game!');
        //then reset game:
        app.resetGame();
      });
    })(),

    playAgain: (function () {
      var $modal = $(".modal");
      var $playAgainBtn = $('.play-again-btn');
      $playAgainBtn.on("click", function(){
        app.resetGame();
        $modal.hide();
        console.log('play again btn clicked');
      });

    })(),


    exitGame: (function () {
      var $modal = $(".modal");
      var $gameWrapper = $(".game-wrapper");
      var $exitGameBtn = $('.exit-game-btn');
      var $playGameBtn = $(".play-game-btn");

      $exitGameBtn.on("click", function(){
        app.resetGame();
        $modal.hide();
        $gameWrapper.hide();
        if ($gameWrapper.is(":visible")) {
            $playGameBtn.text("Hide Game");
        } else {
            $playGameBtn.text("Play Game");
        }




//neds to toggle play-game-btn text



        console.log('exigt game btn clicked');
      });

    })(),

};




(function() {
    var original = jQuery.fn.init;

    jQuery.fn.init = function(selector, context, rootjQuery) {
        var obj = new original(selector, context, rootjQuery);

        if (obj.selector && obj.length === 0 && console && console.warn)
            console.warn("jQuery was called with a selector of '" + selector + "' and returned an empty object");

        return obj;
    };
})();
