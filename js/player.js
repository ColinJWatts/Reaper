Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.force = {x:0.0, y:0.0}; 

var cursors;
var currentItem;
var direction;
var currField;
var inventory;
var inv_slot;
var money = 15;

Player.prototype.moveSpeed = 150;

function Player(game, field, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'player');
    //1st row of inventory is the identifier (e.g a 1 is a shovel, etc.)
    //2nd row is how many of the item the player has
    //this does mean you could get 40 shovels by the end if they drop, but this shouldn't ever happen
    inventory = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    this.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(this);

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
//	checkField();
}

function movePlayer() {
	// controls player movement
	testV = 0;
	testH = 0;	
	if (cursors.left.isDown || cursors.a.isDown) {
		player.body.velocity.x = -player.moveSpeed;
		direction = "L";
		testH = 1;
	}
	if (cursors.right.isDown || cursors.d.isDown) {
		player.body.velocity.x  = player.moveSpeed;
		direction = "R";
		testH = 1;
	}
	if (cursors.up.isDown || cursors.w.isDown){
		player.body.velocity.y  = -player.moveSpeed;
		direction = "U";
		testV = 1;
	}
	if (cursors.down.isDown || cursors.s.isDown) {
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