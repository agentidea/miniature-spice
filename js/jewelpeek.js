document.addEventListener('DOMContentLoaded', function(){

	//
	// types: colors
	// 	red; orange; yellow; blue; green; purple; pink;   
	//
	var types = ['red', 'orange', 'yellow', 'blue', 'green', 'purple', 'pink'];

	// board states:
	// 	init; tile-clicked; pair-clicked; triple-found; stalemate
	//
	(function initBoardState() {

	})();

	// tile states:
	// 1) user-generated states:
	// 	clicked; paired; ( none of these is the default / 3rd state here ) 
	// 2) game/rule states:
	// 	hintable; tripled 
	//
	(function initCTileStates() {

	})();

	//
	// Begin game
	//
	(function createBoard() {
		var rows = 8;
		var tilesPerRow = 8;

		var board = document.getElementById("board");

		for (var i = 0; i < rows; i++) {
			var row = document.createElement("div");
			row.className = "row row" + i;
			for (var j = 0; j < rows; j++) {
				var tile = document.createElement("div");
				tile.className = "tile tile" + j;
				addClassName(tile, random(types)); // give the tile a random background color
				row.appendChild(tile);
				board.appendChild(row);
			}
		}
	})();

	//
	// Game Utils
	//
	// find subsequences of same colors and scrub the subsequence
	function scrubBoardRowOrColumn(colors) {
		// test:
		var colors = ['blue', 'red', 'red', 'red', 'green', 'purple', 'pink', 'red'];
		var matches = findColorSubsequence(); // this returns (1,3)

		//if matches not [] && matches.length >= 3, we have a triple that we want to scrub
		//	can now act by altering tile state
		//		change the last color to be something random but not including the found triple's colors

	} //END scrubBoardRowOrColumn

	// find triples
	function findTriples(colors) {
		// test:
		var colors = ['blue', 'red', 'red', 'red', 'green', 'purple', 'pink', 'red'];
		var matches = findColorSubsequence(); // this returns (1,3)

		//if matches not [] && matches.length == 3, we have a triple 
		//	can now act by changing board and tile states

	} //END findTriples

	//
	// find longest subsequence of an array of same colors (could be a row or a column) 
	// idea is to use this for both highlighting and dealing with moves a
	// as well as scrubbing triples if there are any upon board initialization 
	// - which we otherwise desire to be as random as possible
	//
	function findColorSubsequence(sequence) {
		seq_len = sequence.length;
		max_len = 1;
		answer = [];
		i = 0;

		while(i < seq_len) {
			// check backwards, skip if sequence[j] not same color as sequence[j+1]
			is_skippable = false;
			for (var j = i + max_len-1; j >= i; --j) {
				if (j + 1 >= seq_len || sequence[j] != sequence[j+1]) {
					i = j + 1;
					is_skippable = true;
					break;
				}
			}

			// check forwards if it wasn't skippable
			if (!is_skippable) {
				i += max_len - 1;
				while (i + 1 < seq_len && sequence[i] == sequence[i + 1] ) {
					++i, ++max_len;
				}
				answer = [i - max_len + 1, i];
			}
		}
		return answer;
	}// END findTripleSubsequence


	//
	// Generic Utils
	//
	// add generic class name to any element
	function addClassName(el, className) {
		if (el.classList)
			el.classList.add(className);	
		else
			el.className += ' ' + className;			
	}

	// return a random element from an array
	function random(items) {
		return items[Math.floor(Math.random()*items.length)];
	} //END random

});