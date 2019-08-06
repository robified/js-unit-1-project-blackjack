/*----- constants -----*/ 
const deck = makeADeck();






// class Players {

// }

// const p1 = {
//     score: 0,
//     cardInHand: []
// };

// const dealer = {
//     score: 0,
//     cardInHand: []
// };


/*----- app's state (variables) -----*/ 


/*----- cached element references -----*/ 
 let butDeal = document.getElementById('deal');
 let butHit = document.getElementById('hit');
 let butStand = document.getElementById('stand');
 let butReplay = document.getElementById('replay');


/*----- event listeners -----*/ 


/*----- functions -----*/
function makeADeck() { // to make the deck
    let deck = [];
    let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    suits.forEach(function(suit){
        values.forEach(function(value){
            deck.push({suit: `${suit}`, value: `${value}`, cardName: `${value} of ${suit}`, cardImage: `${suit}${value}.jpg`});
        })
    }); 
    return deck;
};





// to kick off the game
function init() {

}

// might need more than one render fn, not sure yet
function render() {

}

// "Press the start button to start."
    function start() {

    };
    function deal() {

    };
    
// For player 1 to receive a random card
    function hit() {

    };

// To calculate player 1's points
    function calculate() {
// If 
//     value = Ace, then = 1 or 11
//     value = Jack/Queen/King = 10

    };

// For player 1 to stop receiving a card
    function stand() {

    };


// For player 1 to restart
    function replay() {

    };