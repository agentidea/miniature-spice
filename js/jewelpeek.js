//
//
//
(function createBoard() {
	var rows = 8;
	var tilesPerRow = 8;

	var board = document.getElementById("board");

	for(var i = 0; i < rows; i++) {
		var row = document.createElement("div");
		row.className = "row row" + i;
		for (var j = 0; j < rows; j++) {
			var tile = document.createElement("div");
			tile.className = "tile white tile" + j;
			row.appendChild(tile);
			board.appendChild(row);
		}
	}
})();

//
//
//
(function createBoardState() {

})();
(function createTileStates() {

})();
