# Blackjack Card Game

## Intro
* This is a modified blackjack browser-based card game. 
* [Blackjack!](https://robified.github.io/unit-1-project/)

## Wireframe
* [Skeleton Wireframe](https://i.imgur.com/Cuypo1G.jpg)

## Screenshots
![Beginning Screen](https://i.imgur.com/tF9PxwS.png)
---
![Victory Screen](https://i.imgur.com/nq9PDmI.png)

## Technology used
* HTML, CSS, JavaScript.

## Getting Started
* The objective of the game is for the player to obtain 21 points or get as close to 21 points as possible. 
* The player loses if they collect over 21 points or the dealer's hand is closer to 21 points than the player.
* House rule: ace cards count as 11 points.

## User stories
* As a user (AAU), I will receive 2 random cards from the dealer.
* AAU, I will see 1 of the 2 cards in the dealer's hand.
* AAU, I want to decide to HIT and STAND
* AAU, I either win or lose depending on the sum of my hand in comparison to the sum of the dealer's hand. The sum of either hand cannot go over 21 points.
* AUU, I can choose to play again or stop.

## Feature list
* Players
	* Player 1 
	* Dealer
* Total score for each player
* Actions
	* Deal
	* Hit
	* Stand
	* Replay
* Outcomes 
	* Winning
	* Losing
	* Tie

## Stretch goals 
* Allow the ability to bet, double down, and surrender.
* Ace can behave as a 1 or 11.

## Pseudocode
* Start the game by dealing a deck of cards from the DEAL button
	* Player 1 receives 2 cards facing up
	* Dealer receives 1 card facing down and 1 card facing up
* Total Scores of Player 1 and Dealer are shown
* Player 1 can either click HIT or STAND Button
* HIT Button
	* Receive a random card
	* If sum of Player 1's cards > than 21, then Player 1 busts and only REPLAY button is allowed.
	* If sum of Player 1's cards = 21, then Player 1 wins.
	* If sum of Player 1's cards < than 21, then Player 1 can HIT or STAND.
* STAND Button
	* The Dealer shows their 2nd card
	* If the sum of Dealer's cards is < 16, then DEALER must HIT until value is >= 17 or == 21.
	* If sum of Dealer's cards == 21, or Dealer score higher than Player 1, but under 21 points, then the Dealer wins.
	* If sum of Dealer's cards > than 21, then Dealer bust and only REPLAY button is allowed.
* REPLAY Button
	* Restarts the game
