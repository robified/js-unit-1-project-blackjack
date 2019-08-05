/*----- constants -----*/ 
let player = {};
let dealer = {};



/*----- app's state (variables) -----*/ 



/*----- cached element references -----*/ 



/*----- event listeners -----*/ 



/*----- functions -----*/
// to kick off the game
function init() {

}

// might need more than one render fn, not sure yet
function render() {

}

// "Press the start button to start."
    start();
    deal();
    
// For player 1 to receive a random card
    hit();

// To calculate player 1's points
    calculate();

// For player 1 to stop receiving a card
    stand();

// For player 1 to restart
    replay();