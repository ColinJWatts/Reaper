//main.js

//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var mobs;
var plants;
var projectiles;
var items;

var field;
var town;
var gardenTime;
var text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11;
Game = {};
//**********************************MAIN MENU****************************************
Game.MainMenu = function(){ }; 
Game.MainMenu.prototype = {
	preload : function(){

	},

	create : function(){
		text1 = game.add.text(game.world.centerX, game.world.centerY - 200, 'REAPER');
		text1.fill = '#FFFFFF';
		text1.fontSize = 60;
		text1.anchor.setTo(0.5);
		text2 = game.add.text(game.world.centerX, game.world.centerY - 150, 'resistance is fertile');
		text2.fontSize = 20;
		text2.fill = '#FFFFFF';
		text2.anchor.setTo(0.5);
		text3 = game.add.text(game.world.centerX, game.world.centerY - 75, 'Start');
		text3.fontSize = 40;
		text3.fill = '#FFFFFF';
		text3.anchor.setTo(0.5);
		text3.inputEnabled = true;
		//if(text3.input) {
			//this.game.state.start("townstate");
		//}
		
		text4 = game.add.text(game.world.centerX, game.world.centerY, 'Instructions');
		text4.fontSize = 40;
		text4.fill = '#FFFFFF';
		text4.anchor.setTo(0.5);
		text4.inputEnabled = true;
		text5 = game.add.text(game.world.centerX, game.world.centerY+75, 'Credits');
		text5.fontSize = 40;
		text5.fill = '#FFFFFF';
		text5.anchor.setTo(0.5);
		text5.inputEnabled = true;

	},
	
	update : function(){
		text3.events.onInputOver.add(mouseover, this);
		text3.events.onInputOut.add(off, this);
		text4.events.onInputOver.add(mouseover, this);
		text4.events.onInputOut.add(off, this);
		text5.events.onInputOver.add(mouseover, this);
		text5.events.onInputOut.add(off, this);
		if(game.input.activePointer.isDown && text3.fill == '#FF0000')
			{
				this.game.state.start("townstate");
			}
		if(game.input.activePointer.isDown && text4.fill == '#FF0000')
			{
				this.game.state.start("instructions");
			}
		if(game.input.activePointer.isDown && text5.fill == '#FF0000')
			{
				this.game.state.start("credits");
			}
		
		
		function mouseover(text) {
    		text.fill = '#FF0000';    		
		}
		function off(text) {
			text.fill = '#FFFFFF';
		}
	}
}

/***************************************INSTRUCTIONS*****************************************/
Game.instructions = function(){ };
Game.instructions.prototype = {
	preload : function() {
	},
	create : function() {
		text6 = game.add.text(game.world.centerX, game.world.centerY - 200, 'INSTRUCTIONS');
		text6.fill = '#FFFFFF';
		text6.fontSize = 40;
		text6.anchor.setTo(0.5);
		text7 = game.add.text(game.world.centerX, game.world.centerY - 100, 'Move with WASD or arrow keys\nRotate through items with number keys\nAim with the mouse and click to use items');
		text7.fill = '#FFFFFF';
		text7.fontSize = 30;
		text7.anchor.setTo(0.5);
		text8 = game.add.text(game.world.centerX, game.world.centerY + 75, 'Back to Main Menu');
		text8.fill = '#FFFFFF';
		text8.fontSize = 30;
		text8.anchor.setTo(0.5);
		text8.inputEnabled = true;
	},
	update : function() {
		text8.events.onInputOver.add(mouseover, this);
		text8.events.onInputOut.add(off, this);
		if(game.input.activePointer.isDown && text8.fill == '#FF0000')
		{
			this.game.state.start("MainMenu");
		}
		function mouseover(text) {
    		text.fill = '#FF0000';    		
		}
		function off(text) {
			text.fill = '#FFFFFF';
		}
	}

}

/*******************************************CREDITS********************************************/
Game.credits = function(){ };
Game.credits.prototype = {
	preload : function() {
	},
	create : function() {
		text9 = game.add.text(game.world.centerX, game.world.centerY - 200, 'CREDITS');
		text9.fill = '#FFFFFF';
		text9.fontSize = 40;
		text9.anchor.setTo(0.5);
		text10 = game.add.text(game.world.centerX, game.world.centerY, 'Programmers:\nColin Watts\nNathan Watts\nBrian Rappaport\nQuinn Collins\n\nArt:\nFury Sheron');
		text10.fill = '#FFFFFF';
		text10.fontSize = 30;
		text10.anchor.setTo(0.5);
		text11 = game.add.text(game.world.centerX, game.world.centerY + 200, 'Back to Main Menu');
		text11.fill = '#FFFFFF';
		text11.fontSize = 30;
		text11.anchor.setTo(0.5);
		text11.inputEnabled = true;
		
	},
	update : function() {
		text11.events.onInputOver.add(mouseover, this);
		text11.events.onInputOut.add(off, this);
		if(game.input.activePointer.isDown && text11.fill == '#FF0000')
		{
			this.game.state.start("MainMenu");
		}
		function mouseover(text) {
    		text.fill = '#FF0000';    		
		}
		function off(text) {
			text.fill = '#FFFFFF';
		}
	}

}

//***************************************IN GAME************************************
Game.townstate = function(){ };
Game.townstate.prototype = {

	preload: function() {
		game.input.keyboard.onDownCallback = function(e) {
		}
		game.load.image('player', 'assets/player.png');
		game.load.image('scarecrow', 'assets/scarecrow.png');
		game.load.image('crow', 'assets/crow.png');
		game.load.image('corn', 'assets/corn.png');
		game.load.image('scythe', 'assets/scythe.png');
		game.load.image('black', 'assets/black.png');
		game.load.image('blue', 'assets/blue.png');
		game.load.image('cyan', 'assets/cyan.png');
		game.load.image('green', 'assets/green.png');
		game.load.image('magenta', 'assets/magenta.png');
		game.load.image('red', 'assets/red.png');
		game.load.image('white', 'assets/white.png');
		game.load.image('yellow', 'assets/yellow.png');
		game.load.image('dirt', 'assets/dirt.png');
		game.load.image('none', 'assets/invisible.png');
		//game.load.sound('dig', 'assets/sound/dig.mp3');
	},


 	create : function() {
 		game.world.setBounds(0, 0, 4000, 800);

		plants = game.add.group();
		mobs = game.add.group();
		projectiles = game.add.group();
		items = game.add.group();

		garden = new Field(game, 10, 10, 800, 32);

		garden.add(Corn, 0, 2, 4);
		garden.add(Pumpkin, 0, 8, 4);

		player = new Player(game, town, 200, 200);
		gardenTime = 0;
		//shop = new Shop(game, 400, 200, 'blue', [[1, 2, 3], [5, 10, 20]]);
	},

	update : function() {
		gardenTime += game.time.elapsed/1000;
		if(currField == garden){
			garden.tick(gardenTime);
			gardenTime = 0;
		}
		

		movecamera();

		game.physics.arcade.collide(mobs, mobs);
		game.physics.arcade.overlap(projectiles, mobs, hitMob);
		game.physics.arcade.overlap(projectiles, projectiles, hitProj);
		game.physics.arcade.overlap(projectiles, player, hitPlayer);
		game.physics.arcade.overlap(items, player, collectItem);
		game.physics.arcade.overlap(player, garden, function(player, garden){currField = garden});
	}
}






//**************************************GAME STATE START***************************
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', Game.MainMenu);
game.state.add('MainMenu',Game.MainMenu);
game.state.add('gardenstate', Game.gardenstate);
game.state.add('townstate', Game.townstate);
game.state.add('instructions', Game.instructions);
game.state.add('credits', Game.credits);
game.state.start('MainMenu');