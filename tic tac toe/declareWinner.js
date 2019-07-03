function declareWinner(winner) {
	winnerContainer.css('display', 'block');
	reset.css('display', 'block');
	winner = winner === player1 ? 'Jane Doe' : 'John Smith';
	winnerContainer.html(winner + ' Wins!');
}