document.addEventListener('DOMContentLoaded', function(){

//
// types: colors
// 	red; orange; yellow; blue; green; purple; pink;   
//
var types = ['red', 'orange', 'yellow', 'blue', 'green', 'purple', 'pink'];

//
//
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
			tile.className = "tile white tile" + j;
			tile.style.backgroundColor = random(types);
			row.appendChild(tile);
			board.appendChild(row);
		}
	}
})();

// @TODO: tentative..
// board states:
// 	init; tile-clicked; pair-clicked; triple-found; stalemate
//
(function createBoardState() {

})();

// @TODO: tentative..
// tile states:
// 1) user-generated states:
// 	clicked; paired; ( none of these is the default / 3rd state here ) 
// 2) game/rule states:
// 	hintable; tripled 
//
(function createTileStates() {

})();

//
// Utils
//
function random(items) {
	return items[Math.floor(Math.random()*items.length)];
}

});
