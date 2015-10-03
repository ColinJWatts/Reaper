//main.js

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {

	game.load.image('black', 'assets/black.png');
	game.load.image('blue', 'assets/blue.png');
	game.load.image('cyan', 'assets/cyan.png');
	game.load.image('green', 'assets/green.png');
	game.load.image('magenta', 'assets/magenta.png');
	game.load.image('red', 'assets/red.png');
	game.load.image('white', 'assets/white.png');
	game.load.image('yellow', 'assets/yellow.png');
}


function create() {

	var field = new Field(game, 10, 1, 1);

	field.add(examplePlant, 0, 4, 4);

	player = new Player(game, 200, 200);
}

function update() {

}