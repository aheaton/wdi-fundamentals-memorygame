var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];


//function for checking if the two cards match
var checkForMatch = function (){
		if (cardsInPlay[0]===cardsInPlay[1]) {
			alert("You found a match!");
		}
		else{
			alert("Sorry, try again.");
		}	
};

//function for getting the ID of the clicked card, adding the clicked card to the array, & flipping the card
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this['src'] = cards[cardId].cardImage;
	if (cardsInPlay.length===2){
		checkForMatch();
		cardsInPlay = [];
	}
};


//function for creating board with cards and settting up click event listener
var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

