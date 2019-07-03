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