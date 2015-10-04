//main.js

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var mobs;
var plants;
var field;
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
	plants = game.add.group();
	mobs = game.add.group();

	field = new Field(game, 11, 9, 1, 1);

	field.add(examplePlant, 0, 2, 4);

	player = new Player(game, field, 200, 200);
}

function update() {
	game.physics.arcade.collide(mobs, mobs);
}