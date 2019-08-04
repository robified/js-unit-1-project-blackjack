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
	* Hit
	* Stand
	* Replay
* Outcome
	* Win, Lose, or Tie

## User stories
* As a user (AAU), I will receive 2 random cards from the dealer.
* AAU, I will see 1 of the 2 cards in the dealer's hand.
* AAU, I want to decide to HIT and STAND
* AAU, I either or lose depending on the sum of our hands, or dealer's hand.
* AUU, I can choose to play again or stop.

## Features list
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
* Allow the ability to bet, double down, and surrender.

## Pseudocode
* Start the game by dealing a deck of cards
	* Player 1 receives 2 cards facing up
	* Dealer receives 1 card facing down and 1 card facing up

* Total Scores of Player 1 and Dealer are shown

* HIT Button
	* Receive a random card
	* If sum of Player 1's cards > than 21, then Player 1 bust.
	* If sum of Player 1's cards < than 21, then Player 1 can HIT or STAND.
	* If sum of Player 1's cards = 21, then WINNER.
* STAND Button
	* The Dealer shows their 2nd card
	* If the sum of Dealer's cards is <= 16, then DEALER must HIT until value == 17
		* asdf
		* asdf
		* asdf
		* adsf