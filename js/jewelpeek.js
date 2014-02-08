var rows = 8;
var tilesPerRow = 8;

var board = document.getElementById("board");

for(var y = 0; y < rows; y++) {
	var row = document.createElement("div");
	row.className = "row";
        for (var x = 0; x < rows; x++) {
		var tile = document.createElement("div");
	        tile.className = "tile white";
		row.appendChild(tile);
		board.appendChild(row);
	}
}
