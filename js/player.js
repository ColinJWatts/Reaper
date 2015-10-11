Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.force = {x:0.0, y:0.0}; 

var cursors;
var currentItem;
var direction;
var currField;
var inventory;
var inv_slot;

function Player(game, field, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'red');
    inventory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.anchor.setTo(0.5, 0.5);

    currField = field;

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
	//};

	//this.numKeys = game.input.keyboard.createCursorKeys();
	//numKeys = {
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
	this.checkField();
}

function movePlayer() {
	// controls player movement
	if (cursors.left.isDown || cursors.a.isDown) {
		player.x -= 3;
		direction = "L";
	}
	if (cursors.right.isDown || cursors.d.isDown) {
		player.x += 3;
		direction = "R";
	}
	if (cursors.up.isDown || cursors.w.isDown){
		player.y -= 3;
		direction = "U";
	}
	if (cursors.down.isDown || cursors.s.isDown) {
		player.y += 3;
		direction = "D";
	}
}

function checkUsedItem(){

	if(cursors.k0.justPressed(1)) {
		currentItem = inventory[0];
		inv_slot = 0;
	}
	if(cursors.k1.justPressed(1)) {
		currentItem = inventory[1];
		inv_slot = 1;
	}
	if(cursors.k2.justPressed(1)) {
		currentItem = inventory[2];
		inv_slot = 2;
	}


	if(game.input.activePointer.isDown) {
		console.log("using item");
		useItem(currentItem, inv_slot);
	}
/*
		var i = 0;i<10;i++){
		var j = "k"+i;
		if (cursors.j.isDown)
			useItem(inventory(i));
	}*/
}

Player.prototype.checkField = function(){
	if(currField == garden && this.x <= 0){
		console.log("entered town");
		currField = 'town';
		this.x = game.world.width-1;
		mobs.removeAll(true);
	}
	else if(currField == 'town' && this.x >= game.world.width){
		console.log("entered garden");
		currField = garden;
		this.x = 1;
	}
}