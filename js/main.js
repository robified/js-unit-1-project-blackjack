/*----- constants -----*/ 
let deck, dealer, p1;

class Player {
    constructor(score, hand) {
        this.score = score;
        this.hand = hand;
    }
};

/*----- app's state (variables) -----*/ 


/*----- cached element references -----*/ 
let dcard = document.getElementById('dcard');
let pcard = document.getElementById('pcard');

let dscoreEl = document.getElementById('dscore');
let pscoreEl = document.getElementById('pscore');

let butDeal = document.getElementById('deal');
let butHit = document.getElementById('hit');
let butStand = document.getElementById('stand');
let butReplay = document.getElementById('replay');


/*----- event listeners -----*/ 
butDeal.addEventListener('click', deal);
butHit.addEventListener('click', hit);
butStand.addEventListener('click', stand);
butReplay.addEventListener('click', replay);


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

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const randomInt = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[randomInt]] = [deck[randomInt], deck[i]];
    }
};

function init() { // to start off the game
    deck = makeADeck();
    shuffleDeck(deck);
    p1 = new Player('0', []);
    dealer = new Player('0', []);
    dcard.textContent = '';
    pcard.textContent = '';
    dscoreEl.textContent = '0';
    pscoreEl.textContent = '0';
};

function deal() { // removes a random card from deck array
    getCards(p1, 2);
    getCards(dealer, 2);
    showScore(p1, pscoreEl);
    showScore(dealer, dscoreEl);
    showHand(dealer, dcard);
    showHand(p1, pcard);
};

function getCards(player, num){
    let remove = deck.splice(0, num); // removes one random card
    player.hand = remove;
};

function showHand(player, element) {
    for (let i = 0; i < player.hand.length; i++){
        let createP = document.createElement('p')
        createP.textContent = player.hand[i].cardName;
        element.appendChild(createP);
    }
};

function showScore(player, element) {
    for (let i = 0; i < player.hand.length; i++){

        element.textContent = player.hand[i].value;
    }
};

init();

// To calculate player 1's points
function calculateScore() {
    If 
        value = Ace, then = 1 or 11
        value = Jack/Queen/King = 10
    };

    

// For player 1 to stop receiving a card
    function stand() {

    };


// For player 1 to restart
    function replay() {
        init();
    };