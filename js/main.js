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

//START OF ACTUAL CODE
	var field = new Field(game, 10);

	field.add(examplePlant, 5, 5);






//END OF ACTUAL CODE

	//game.add.sprite(0,0,'star');
/*	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0,'sky');

	platforms = game.add.group();

	platforms.enableBody=true;

	var ground = platforms.create(0,game.world.height - 64, 'ground');

	ground.scale.setTo(2,2);

	ground.body.immovable = true;

	var ledge = platforms.create(400,400,'ground');

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 250, 'ground');

	ledge.body.immovable = true;

	//Part 5

	player = game.add.sprite(32, game.world.height - 150, 'dude');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	player.animations.add('left', [0,1,2,3], 10, true);
	player.animations.add('right',[5,6,7,8], 10, true);


	cursors = game.input.keyboard.createCursorKeys();



	//Stars
	stars = game.add.group();
	stars.enableBody = true;

	for (var i = 0; i < 12; i++) {

		var star = stars.create(i * 70, 0, 'star');

		star.body.gravity.y = 6;

		star.body.bounce.y = 0.7 + Math.random() * .2;
	}

	scoreText = game.add.text(16,16,'Score: 0', {fontSize: '32px', fill: '#000'});*/

}

function update() {


	//START OF ACTUAL CODE
	






	//END OF ACTUAL CODE




/*
	game.physics.arcade.collide(player, platforms);

	player.body.velocity.x = 0;

	if (cursors.left.isDown) {
		player.body.velocity.x = -150;

		player.animations.play('left');
	}
	else if (cursors.right.isDown) {
		player.body.velocity.x = 150;

		player.animations.play('right');
	}
	else {
		player.animations.stop();

		player.frame = 4;
	}

	if(cursors.up.isDown && player.body.touching.down) {

		player.body.velocity.y = -350;
	}


	//Stars

	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.overlap(player, stars, collectStar, null, this);*/
}

/*
function collectStar(player, star) {

	star.kill();
	score += 10;
	scoreText.text = 'Score: ' +score;
}
*/