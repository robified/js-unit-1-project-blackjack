# Blackjack Card Game

## Intro
* This is a blackjack browser-based card game. 

## Objective
* The objective of the game is for the player to obtain 21 points or get as close to 21 points as possible. 
* The player loses if they collect over 21 points or the dealer's hand is closer to 21 points than the player.

## Technology used
* HTML, CSS, JavaScript.

## Wireframes
* Cards
	* Player's card
	* Dealer's card
* Scores
	* Player's score
	* Dealer's score
* Buttons
	* Betting 
	* Hit
	* Stand
	* Replay
	* Extras (Start/Quit, Double down, and Surrender)
* Outcome
	* Win, Lose, Tie, or Bust

## User stories
* As a user (AAU), I want to BET a certain amount (1, 5, 10, 50, 100).
* AAU, I will receive 2 random cards from the dealer.
* AAU, I will see 1 of the 2 cards in the dealer's hand.
* AAU, I want to decide to HIT, STAND, DOUBLE DOWN, or SURRENDER.
* AAU, I either or lose depending on the sum of our hands, or dealer's hand.
* AUU, I can choose to play again or stop.

## Features list
* Starting funds
* Buttons for preset betting amounts
* Total betting amount
* Score
	* Player
	* Dealer
* Actions
	* Hit
	* Stand
* Outcomes
	* Winning
	* Losing
	* Ties

## Stretch goals 
* Allow the ability to Double down and surrender.

## Pseudo code
* HIT
	* Receive a random card
	* If sum of my cards > than 21, then I  go bust.
	* If sum of my cards < than 21, then I can HIT or STAND.
	* If sum of my cards = 21, then I STAND.
* STAND
	* The dealer shows their 2nd card.
	* If the sum of their cards is <= 16, then they must HIT.