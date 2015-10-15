//main.js

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var mobs;
var plants;
var projectiles;
var items;

var field;
var town;
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
	game.load.image('dirt', 'assets/dirt.png');
	//game.load.sound('dig', 'assets/sound/dig.mp3');
}


function create() {
	plants = game.add.group();
	mobs = game.add.group();
	projectiles = game.add.group();
	items = game.add.group();

	garden = new Field(game, 11, 9, 32, 32);
	town = new Field(game, 1, 1, 32, 32);

	garden.add(Corn, 0, 2, 4);

	player = new Player(game, garden, 200, 200);
	gardenTime = 0;
	shovel = new Item(game, 300, 300, 'white', false, 1, 1);
}

function update() {
	
	gardenTime += game.time.elapsed/1000;
	if(currField == garden){
		garden.tick(gardenTime);
		gardenTime = 0;
	}

	game.physics.arcade.collide(mobs, mobs);
	game.physics.arcade.overlap(projectiles, mobs, hitMob);
	game.physics.arcade.overlap(projectiles, projectiles, hitProj);
	game.physics.arcade.overlap(projectiles, player, hitPlayer);
	if(game.physics.arcade.overlap(items, player)){
		console.log(inventory);
	}
}