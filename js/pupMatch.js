
var main = function() {

    // var $showNavBtn = $(".hamburger-btn");
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

};

var app = {
    // cards: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    cards: ["images/gamePics/yorkie-bandage-thumb.jpg", "images/gamePics/yorkie-bandage-thumb.jpg",
     "images/gamePics/yorkie-in-bed-thumb.jpg",
     "images/gamePics/yorkie-in-bed-thumb.jpg"],

    init: function() {
        this.shuffle();
        console.log('jQuery ', $('.hello').length);
    },


    test: function() {
        console.log('test method running!');
    },


    displayShuffled: function() {
        console.log('shuffled', this.cards);
    },

    randomNum: function() {
        var random = 0; //set this to just undefined instead?
        for (var i = 2; i <= 3; i++) {
            console.log(i);
        }
    },

    shuffle: function() {
        //returns a shuffled cards array. Then put each item of arr into div
        // with class of cards
        var random = 0;
        var temp = 0;
        // var arrTest = [];
        var cardsArrLen = this.cards.length;
        // console.log('cards arr len', this.cards.length);
        for (var i = 1; i < cardsArrLen; i++) {
            random = Math.round(Math.random() * i);
            // console.log('random', random);
            // arrTest.push(random);
            temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
        this.displayShuffled();
        this.assignCards();
        // console.log('arrTest', arrTest);
    },

    assignCards: function() {
        $('.card').each(function(index) {
            // console.log('this', this);
            // console.log('each fxn index', index);
            // console.log('test', app.cards[0]); //do not use this.cards[]. it refers
            //to the div class of card.
            $(this).attr('data-card-value', app.cards[index]);
            // $(this).attr('src', app.cards[index]);

        });
        this.clickHandlers();
    },

    clickHandlers: function() {
        $('.card').on('click', function() {
            console.log('click');
            // $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected');
            $(this).attr('src', $(this).data('cardValue'));
            app.checkMatch();
        });
    },

    // clickHandlers: function() {
    //     $('.card').on('click', function() {
    //         console.log('click');
    //         $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected');
    //         app.checkMatch();
    //     });
    // },

    checkMatch: function() {
      console.log('checkMatch running');
      console.log('true or false',$('.selected').length == 2 );
        if ($('.selected').length == 2) {
          // console.log('testing match', $('.selected').first().data('cardValue') == $('.selected').last().data('cardValue'));
            if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
                $('.selected').each(function() {
                  $(this).animate({
                    opacity: 0
                  }).removeClass('unmatched');
                });
                $('.selected').each(function() {
                    $(this).removeClass('selected');
                });
                app.checkWin();
            } else {
              setTimeout(function(){
                $('.selected').each(function(){
                  $(this).html("").removeClass('selected');
                });
              }, 1000);
            }
        }
    },

    checkWin: function () {
      if ($('.unmatched').length === 0) {
        console.log('you WIN!');
      }
    }

};

app.init();
console.log('cards len', app.cards.length);
$(document).ready(main);
