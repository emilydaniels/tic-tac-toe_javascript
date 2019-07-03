
let player1 = 'X';
let player2 = 'O';
let currentTurn = 1;
let movesMade = 0;

let sqr = $('.square');
let winnerContainer = $('.winner');
let reset = $('.reset');


sqr.on('click', function(e) {
	movesMade++;

	if (currentTurn === 1) {
		event.target.innerHTML = player1;
		event.target.style.color = 'red';
		currentTurn++;
	} else {
		event.target.innerHTML = player2;
		event.target.style.color = 'green';
		currentTurn--;
	}

	if (checkForWinner()) {
		let theWinner = currentTurn === 1 ? player2 : player1;
		declareWinner(theWinner);
	}
});

reset.on('click', (e) => {
	var moves = Array.prototype.slice.call($('.square'));
	moves.map((m) => {
		m.innerHTML = '';
	});
	winnerContainer.html('');
	winnerContainer.css('display', 'none');
	currentTurn = 1;
});
function checkForWinner() {
	if (movesMade > 4) {
		var sqr = $('.square');
		var moves = Array.prototype.slice.call($('.square'));
		var results = moves.map(function(square) {
			return square.innerHTML;
		});
		var winningCombos = [
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 4, 8 ],
			[ 2, 4, 6 ]
		];
		return winningCombos.find(function(combo) {
			if (
				results[combo[0]] !== '' &&
				results[combo[1]] !== '' &&
				results[combo[2]] !== '' &&
				results[combo[0]] === results[combo[1]] &&
				results[combo[1]] === results[combo[2]]
			) {
				return true;
			} else {
				return false;
			}
		});
	}
}
function declareWinner(winner) {
	winnerContainer.css('display', 'block');
	reset.css('display', 'block');
	winner = winner === player1 ? 'Jane Doe' : 'John Smith';
	winnerContainer.html(winner + ' Wins!');
}