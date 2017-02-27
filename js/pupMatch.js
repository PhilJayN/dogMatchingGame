// var main = function() {


var handlers = {

    init: function() {
        this.hamburgerHandlers();
        this.gameHandlers();
        this.testClick();
    },

    testClick: function () {
      var $testClick = $('.test-btn');
      $testClick.on("click", function(){
        app.resetGame();
      });
    },

    hamburgerHandlers: function() {
        var $primaryNav = $(".primary-nav");
        var $hamburgerWrapper = $(".hamburger-wrapper");
        var $menuTxt = $(".menu-txt");

        $hamburgerWrapper.on("click", function() {
            console.log('click');
            $primaryNav.slideToggle("normal", function() {
                if ($primaryNav.is(":visible")) {
                    $menuTxt.text("Hide Menu");
                } else {
                    $menuTxt.text("Show Menu");
                }
            });
        });
    },

    gameHandlers: function() {
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
    }

};
handlers.init();

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
        console.log('assignData cards arr used: ', app.cards);

        $card.each(function(index) {
          // debugger;
            // $(this).removeAttr('data-card-value');
            $(this).attr('data-card-value', app.cards[index]);
            //correct data value added:
            //  console.log('data value added:', app.cards[index]) ;

            // console.log('app.cards index', app.cards[11]);
        });
        this.clickHandlers();
    },

    //changes the img src of clicked element using data-card-value
    //then Adds class selected to the element clicked.
    clickHandlers: function() {
        // var $card = $('.card');
        //this is whatever element you click on:
        $('.card').off().on('click', function() {
          console.log('click in clickhandlers ACTIVATED!');
            console.log('this el', this, 'cardValue', $(this).data('cardValue'));

            // console.log('clickhandlers assignment of src:', $(this).data('cardValue'));
            $(this).attr('src', $(this).data('card-value')).addClass('selected');
            app.checkMatch();
        });
    },

    checkMatch: function() {
        var $selected = $('.selected');
        if ($selected.length === 2) {
            if ($selected.first().data('cardValue') === $selected.last().data('cardValue')) {
                $selected.each(function() {
                    $(this).animate({
                        opacity: 0
                    }).removeClass('unmatched').removeClass('selected');
                });
                app.checkWin();
            } else {
                setTimeout(function() {
                    $selected.each(function() {
                        $(this).attr('src', "images/gamePics/blue-gradient.jpg").removeClass('selected');
                    });
                }, 1000);
            }
        }
    },

    checkWin: function() {
        if ($('.unmatched').length === 0) {
            alert("Great job!");
        }
    },

    resetGame: function() {
        // console.log('resetGame method running');
            $('.card').each(function() {
                $(this).removeAttr('data-card-value').attr('src', "images/gamePics/blue-gradient.jpg").animate({
                    opacity: 100
                }).removeClass('selected');
            });

            // debugger;
            app.shuffle();
    }
};

debugger;
app.init();

// $(this).removeAttr('data-card-value');
// $(this).attr('src', "images/gamePics/blue-gradient.jpg").removeClass('selected');



// app.shuffle();

//}; //end of main function

// $(document).ready(main);



(function() {
    var original = jQuery.fn.init;

    jQuery.fn.init = function(selector, context, rootjQuery) {
        var obj = new original(selector, context, rootjQuery);

        if (obj.selector && obj.length === 0 && console && console.warn)
            console.warn("jQuery was called with a selector of '" + selector + "' and returned an empty object");

        return obj;
    };
})();



//
// removeDataAttr: function() {
//     $('.card').each(function() {
//         $(this).removeAttr('data-card-value');
//     });
// },


//REMOVE THIS!! JUST A TEST TO auto win game for debugging! WRITE IN BLOG
// removeAllUnmatched: function() {
//     $('.column-1').children('img').removeClass('unmatched');
// },


// $('.card').each(function() {
//   //add back opacity:
//     $(this).attr('src', "images/gamePics/flower-blurred.jpg").animate({
//             opacity: 100
//         });
//     $(this).removeAttr('data-card-value');
//
//     // $(this).removeClass('selected');
//     // $(this).addClass('unmatched');
//       //works:
//     // $(this).removeClass('card');
//     // $(this).addClass('teddy');
//     console.log('this keyword after resetGame method running:', this);
// });
