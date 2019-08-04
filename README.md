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
	* Deal
	* Hit
	* Stand
	* Replay
* Outcome
	* Win, Lose, or Tie

## User stories
* As a user (AAU), I will receive 2 random cards from the dealer.
* AAU, I will see 1 of the 2 cards in the dealer's hand.
* AAU, I want to decide to HIT and STAND
* AAU, I either win or lose depending on the sum of my hand in comparison to the sum of the dealer's hand. The sum of either hand cannot go over 21 points.
* AUU, I can choose to play again or stop.

## Features list
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
* Start the game by dealing a deck of cards from the DEAL button
	* Player 1 receives 2 cards facing up
	* Dealer receives 1 card facing down and 1 card facing up
* Total Scores of Player 1 and Dealer are shown
* Player 1 can either click HIT or STAND Button
* HIT Button
	* Receive a random card
	* If sum of Player 1's cards > than 21, then Player 1 busts and REPLAY button appears
	* If sum of Player 1's cards = 21, then Player 1 wins.
	* If sum of Player 1's cards < than 21, then Player 1 can HIT or STAND.
* STAND Button
	* The Dealer shows their 2nd card
	* If the sum of Dealer's cards is <= 16, then DEALER must HIT until value is >= 17 or == 21.
	* If sum of Dealer's cards = 21, the Dealer wins.
	* If sum of Dealer's cards > than 21, then Dealer bust and REPLAY button appears.
* REPLAY Button
	* Restarts the game