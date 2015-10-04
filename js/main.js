//main.js

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var mobs;
var plants;
var field;
var gardenTime;

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

	garden = new Field(game, 11, 9, 1, 1);

	garden.add(examplePlant, 0, 2, 4);

	player = new Player(game, garden, 200, 200);
	gardenTime = 0;
}

function update() {
	
	gardenTime += game.time.elapsed/1000;
	if(currField == garden){
		garden.tick(gardenTime);
		gardenTime = 0;
	}

	game.physics.arcade.collide(mobs, mobs);
}