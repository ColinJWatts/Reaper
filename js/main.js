//main.js

//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var mobs;
var plants;
var projectiles;
var items;

var field;
var town;
var gardenTime;

Game = {};
/***********************************MAIN MENU****************************************/
Game.MainMenu = function(){ }; 
Game.MainMenu.prototype = {
	preload : function(){

	},

	create : function(){
		game.add.text(16, 16, 'START?', { fontSize: '32px', fill: '#FFFFFF' });

	},

	update : function(){
		game.input.keyboard.onDownCallback = function(e) {
				console.log(e.keyCode);
				this.game.state.start("townstate");
		}
	}
}

/***************************************IN GAME************************************/
Game.townstate = function(){ };
Game.townstate.prototype = {

	preload: function() {
		game.input.keyboard.onDownCallback = function(e) {
		}
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
	},


 	create : function() {
 		game.world.setBounds(0, 0, 1000, 1000);

		plants = game.add.group();
		mobs = game.add.group();
		projectiles = game.add.group();
		items = game.add.group();

		//garden = new Field(game, 11, 9, 32, 32);
		town = new Field(game, 1, 1, 32, 32);

		//garden.add(Corn, 0, 2, 4);

		player = new Player(game, town, 200, 200);
		gardenTime = 0;
		shovel = new Item(game, 300, 300, 'white', false, 1, 1);
	},

	update : function() {
	
		gardenTime += game.time.elapsed/1000;
		/*if(currField == garden){
			garden.tick(gardenTime);
			gardenTime = 0;
		}
		*/

		game.camera.x = player.body.x-100;
		game.camera.y = player.body.y-100;
			if(player.position.x >= game.world.width){
				console.log("entered garden");
				this.game.state.start('gardenstate');
			}

		game.physics.arcade.collide(mobs, mobs);
		game.physics.arcade.overlap(projectiles, mobs, hitMob);
		game.physics.arcade.overlap(projectiles, projectiles, hitProj);
		game.physics.arcade.overlap(projectiles, player, hitPlayer);
		game.physics.arcade.overlap(items, player, collectItem);
	}
}

/****************************************TOWN***************************************/
Game.gardenstate = function(){ };
Game.gardenstate.prototype = {

	preload: function() {
		game.input.keyboard.onDownCallback = function(e) {
		}
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
	},


 	create : function() {
		plants = game.add.group();
		mobs = game.add.group();
		projectiles = game.add.group();
		items = game.add.group();

		garden = new Field(game, 11, 9, 32, 32);
		//town = new Field(game, 1, 1, 32, 32);

		garden.add(Corn, 0, 2, 4);
		garden.add(Pumpkin, 0, 8, 4);

		player = new Player(game, garden, 200, 200);
		gardenTime = 0;
		shovel = new Item(game, 300, 300, 'white', false, 1, 1);
	},

	update : function() {
	
		gardenTime += game.time.elapsed/1000;
		if(currField == garden){
			garden.tick(gardenTime);
			gardenTime = 0;
		}
		if(player.position.x <= 0)
		{
			console.log("entered town");
			this.game.state.start('townstate');
		}

		game.physics.arcade.collide(mobs, mobs);
		game.physics.arcade.overlap(projectiles, mobs, hitMob);
		game.physics.arcade.overlap(projectiles, projectiles, hitProj);
		game.physics.arcade.overlap(projectiles, player, hitPlayer);
		if(game.physics.arcade.overlap(items, player)){
			console.log(inventory);
		}
	}
}






/**************************************GAME STATE START***************************/
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', Game.MainMenu);
game.state.add('MainMenu',Game.MainMenu);
game.state.add('gardenstate', Game.gardenstate);
game.state.add('townstate', Game.townstate)

game.state.start('MainMenu');