/*----- constants -----*/ 
let deck, dealer, p1, dtotal, ptotal;

class Player {
    constructor(score, hand, name) {
        this.score = score;
        this.hand = hand;
        this.name = name;
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

let messageEl = document.querySelector('h4');

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
    p1 = new Player('0', [], 'Player 1');
    dealer = new Player('0', [], 'Dealer');
    dtotal = 0;
    ptotal = 0;
    dscoreEl.textContent = '0';
    pscoreEl.textContent = '0';
    dcard.textContent = '';
    pcard.textContent = '';
    butHit.setAttribute('disabled', '');
    butStand.setAttribute('disabled', '');
};

function deal() { // removes a random card from deck array
    getCards(dealer, 2);
    dtotal = showScore(dealer, dtotal, dscoreEl);
    showHand(dealer, dcard);

    getCards(p1, 2);
    ptotal = showScore(p1, ptotal, pscoreEl);
    showHand(p1, pcard);    
    

    butDeal.setAttribute('disabled', '');
    butHit.removeAttribute('disabled');
    butStand.removeAttribute('disabled');
    
    messageEl.textContent = 'HIT or STAND?';
    dscoreEl.style.visibility = 'hidden';
    document.getElementById('0Dealer').style.visibility = 'hidden';
    checkWinner(dtotal, dscoreEl, pscoreEl, dealer, p1);
    checkWinner(ptotal, pscoreEl, dscoreEl, p1, dealer);
};

function getCards(player, num){
    let remove = deck.splice(0, num); // removes one random card
    player.hand = remove;
};

function showHand(player, element, name) {
    for (let i = 0; i < player.hand.length; i++){
        let createSpan = document.createElement('span');
        createSpan.id = `${i}${player.name}`;
        createSpan.textContent = player.hand[i].cardName + '. ';
        element.appendChild(createSpan);
    }
};

function showScore(player, playerTotal, element) {
    for (let i = 0; i < player.hand.length; i++){  
        switch (player.hand[i].value) {
            case "Ace":
                playerTotal += 11;
                break;
            case "2":
                playerTotal += 2;
                break;
            case "3":
                playerTotal += 3;
                break;
            case "4":
                playerTotal += 4;
                break;
            case "5":
                playerTotal += 5;
                break;
            case "6":
                playerTotal += 6;
                break;
            case "7":
                playerTotal += 7;
                break;
            case "8":
                playerTotal += 8;
                break;
            case "9":
                playerTotal += 9;
                break;
            case "10":
                playerTotal += 10;
                break;
            case "Jack":
                playerTotal += 10;
                break;
            case "Queen":
                playerTotal += 10;
                break;
            case "King":
                playerTotal += 10;
        }
    }
    element.textContent = playerTotal;
    return playerTotal;
};

function checkWinner(playerTotal, playerScoreEl, opponentScoreEl, player, opponent) {
    if (playerTotal == 21) {
        messageEl.textContent = player.name + ' wins!';
        
        playerScoreEl.style.color = 'green';
        opponentScoreEl.style.color = 'red';
        
        dscoreEl.style.visibility = '';
        document.getElementById('0Dealer').style.visibility = '';
    
        butDeal.setAttribute("disabled", '');
        butHit.setAttribute("disabled", '');
        butStand.setAttribute("disabled", '');    
    } if (playerTotal > 21) {
        messageEl.textContent = opponent.name + ' wins!';
        
        playerScoreEl.style.color = 'red';
        opponentScoreEl.style.color = 'green';
        
        dscoreEl.style.visibility = '';
        document.getElementById('0Dealer').style.visibility = '';
    
        butDeal.setAttribute("disabled", '');
        butHit.setAttribute("disabled", '');
        butStand.setAttribute("disabled", '');  
    }
};


function hit() {
    getCards(p1, 1);
    ptotal = showScore(p1, ptotal, pscoreEl);
    showHand(p1, pcard);
    checkWinner(ptotal, pscoreEl, dscoreEl, p1, dealer);
};

function replay() {
    butDeal.removeAttribute("disabled", '');
    butHit.removeAttribute('disabled');
    butStand.removeAttribute('disabled');
    init();
};

// // For player 1 to stop receiving a card
//     function stand() {

//     };
init();