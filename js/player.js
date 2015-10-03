Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.force = {x:0.0, y:0.0}; 

var cursors;

function Player(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'red');
    inventory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.anchor.setTo(0.5, 0.5);

    this.cursors = game.input.keyboard.createCursorKeys();
	cursors = {
    up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
    down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
    left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
    right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
	};

    game.add.existing(this);
}

Player.prototype.update = function() {
	movePlayer();
	//checkUsedItem();
}

function movePlayer() {
	// controls player movement
	if (cursors.left.isDown)
		player.x -= 3;
	else if (cursors.right.isDown) 
		player.x += 3;
	else if (cursors.up.isDown)
		player.y -= 3;
	else if (cursors.down.isDown)
		player.y += 3;
}
/*
function checkUsedItem(){
	for (var i = 0;i<10;i++){
		var j = i+"";
		if (cursors.j.isDown)
			useItem(inventory(i));
	}
}

function useItem(item){
	if(item != 0) {
		if()
	}
}
*/