/*----- constants -----*/ 
let deck, dealer, dscore, pscore, p1; 

class Player {
    constructor(score, cardInHand) {
        this.score = score;
        this.cardInHand = cardInHand;
    }
};

/*----- app's state (variables) -----*/ 


/*----- cached element references -----*/ 
let dcard1 = document.getElementById('dcard1');
let dcard2 = document.getElementById('dcard2');
let dcard3 = document.getElementById('dcard3');
let dcard4 = document.getElementById('dcard4');
let dcard5 = document.getElementById('dcard5');
let dcard6 = document.getElementById('dcard6');

let dscoreEl = document.getElementById('dscore');
let pscoreEl = document.getElementById('pscore');

let pcard1 = document.getElementById('pcard1');
let pcard2 = document.getElementById('pcard2');
let pcard3 = document.getElementById('pcard3');
let pcard4 = document.getElementById('pcard4');
let pcard5 = document.getElementById('pcard5');
let pcard6 = document.getElementById('pcard6');

let butDeal = document.getElementById('deal');
let butHit = document.getElementById('hit');
let butStand = document.getElementById('stand');
let butReplay = document.getElementById('replay');



/*----- event listeners -----*/ 
butDeal.addEventListener('click', init);

/*----- functions -----*/
function init() { // to start off the game
    deck = makeADeck();
    p1 = new Player('0', []);
    dealer = new Player('0', []);
    render();
};

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

function render() { // might need more than one render fn, not sure yet
    dscore = dealer.score;
    ddeck = dealer.cardInHand;
    dscoreEl.textContent = dscore;
    dcard1.textContent = ddeck;

    pscore = p1.score;
    pdeck = p1.cardInHand
    pscoreEl.textContent = pscore;
    pcard1.textContent = ddeck;
};

function deal() {
    let removeOneCards = deck.splice(`${Math.floor(Math.random() * deck.length)}`, 1); // removes one random card
    let removeTwoCards = deck.splice(`${Math.floor(Math.random() * deck.length)}`, 2); // removes two random card
    dealer.cardInHand.push(removeOneCards);
    p1.cardInHand.push(removeTwoCards);    
    render();    
};

function removeACard(){ // removes a random card from deck array
    
}






// "Press the start button to start."
    function start() {

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