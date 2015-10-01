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

<<<<<<< HEAD
//START OF ACTUAL CODE
	var field = new Field(game, 10);

	field.add(examplePlant, 5, 5);
=======
	player = new Player(game, 20, 20);
>>>>>>> eb75f40aa4465528fa359494463c39f9cf19ca0a

}

function update() {

}