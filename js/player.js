Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.force = {x:0.0, y:0.0}; 

var cursors;
var currentItem;
var direction;
var currField;
var inventory = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var inv_slot;
var money = 15;
Player.prototype.moveSpeed = 150;

function Player(game, field, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'player');
    this.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this);
	inventoryUI = game.add.text(game.world.width/2-200, game.camera.height - 100, '[0][0][0][0][0][0][0][0][0][0]', { font: '24px Arial', fill: '#fff' });

    buildInventory(inventory);
    
    //currField = garden;

    this.position.x = x;
    this.position.y = y;

    this.cursors = game.input.keyboard.createCursorKeys();
	cursors = {
    up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
    down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
    left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
    right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),

    w: game.input.keyboard.addKey(Phaser.Keyboard.W),
    s: game.input.keyboard.addKey(Phaser.Keyboard.S),
    a: game.input.keyboard.addKey(Phaser.Keyboard.A),
    d: game.input.keyboard.addKey(Phaser.Keyboard.D),

    k0: game.input.keyboard.addKey(Phaser.Keyboard.ZERO),
    k1: game.input.keyboard.addKey(Phaser.Keyboard.ONE),
    k2: game.input.keyboard.addKey(Phaser.Keyboard.TWO),
    k3: game.input.keyboard.addKey(Phaser.Keyboard.THREE),
    k4: game.input.keyboard.addKey(Phaser.Keyboard.FOUR),
    k5: game.input.keyboard.addKey(Phaser.Keyboard.FIVE),
    k6: game.input.keyboard.addKey(Phaser.Keyboard.SIX),
    k7: game.input.keyboard.addKey(Phaser.Keyboard.SEVEN),
    k8: game.input.keyboard.addKey(Phaser.Keyboard.EIGHT),
    k9: game.input.keyboard.addKey(Phaser.Keyboard.NINE),
    };

    game.add.existing(this);
}

Player.prototype.update = function() {
	movePlayer();
	checkUsedItem();
<<<<<<< HEAD
	this.rotation = Math.atan2(this.y - game.input.mousePointer.y - game.camera.y, this.x - game.input.mousePointer.x - game.camera.x) - Math.PI/2;
=======
>>>>>>> b7e71db55d7e6f103b8f0cfa10ab11996d55e402
	buildInventory(inventory);
//	checkField();
}

function buildInventory(i){
	//1st row of inventory is the identifier (e.g a 1 is a shovel, etc.)
    //2nd row is how many of the item the player has
    //this does mean you could get 40 shovels by the end if they drop, but this shouldn't ever happen
    inventoryUI.destroy();
    inventoryUI = game.add.text(game.camera.width/2-100 + game.camera.x, game.camera.height - 100 + game.camera.y, '['+i[0][1]+']['+i[0][2]+']['+i[0][3]+']['+i[0][4]+']['+i[0][5]+']['+i[0][6]+']['+i[0][7]+']['+i[0][8]+']['+i[0][9]+']['+i[0][0]+']', { font: '24px Arial', fill: '#fff' });
}

function movePlayer() {
	// controls player movement
	testV = 0;
	testH = 0;
	if ((cursors.left.isDown || cursors.a.isDown) && player.position.x >= 32) {
		player.body.velocity.x = -player.moveSpeed;
		direction = "L";
		testH = 1;
	}
	if ((cursors.right.isDown || cursors.d.isDown)){
		player.body.velocity.x  = player.moveSpeed;
		direction = "R";
		testH = 1;
	}
	if ((cursors.up.isDown || cursors.w.isDown) && player.position.y >= 32){
		player.body.velocity.y  = -player.moveSpeed;
		direction = "U";
		testV = 1;
	}
	if ((cursors.down.isDown || cursors.s.isDown)) {
		player.body.velocity.y  = player.moveSpeed;
		direction = "D";
		testV = 1;
	}
	if (testH == 0) {
		player.body.velocity.x = 0;
	}
	if (testV == 0) {
		player.body.velocity.y = 0;
	}
}

function checkUsedItem(){
	//checks if the player is using an item at any given moment
	if(cursors.k0.justPressed(1)) {
		currentItem = inventory[0][0];
		inv_slot = 0;
	}
	if(cursors.k1.justPressed(1)) {
		currentItem = inventory[0][1];
		inv_slot = 1;
	}
	if(cursors.k2.justPressed(1)) {
		currentItem = inventory[0][2];
		inv_slot = 2;
	}


	if(game.input.activePointer.isDown) {
		console.log("using item");
		useItem(currentItem, inv_slot);
		buildInventory(inventory);
	}
}

function movecamera(){
	game.camera.x = player.body.x-game.width/2 - 50*Math.tanh((player.body.x-game.camera.x-game.width/2)/50);
	game.camera.y = player.body.y-game.height/2 - 50*Math.tanh((player.body.y-game.camera.y-game.height/2)/50);
		if(player.position.x >= game.world.width){
			console.log("entered garden");
			this.game.state.start('gardenstate');
		}

}

/*
function checkField(){
	//console.log("player x: %d, player y: %d", player.position.x, player.position.y);
	if(currField == garden && player.position.x <= 0){
		console.log("entered town");
		currField = town;
		this.x = game.world.width-1;
		mobs.removeAll(true);
	}
	else if(currField == town && player.position.x >= game.world.width){
		console.log("entered garden");
		currField = garden;
		this.x = 1;
	}
}
*/