Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.force = {x:0.0, y:0.0}; 


function Player(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'red');
    inventory = [0 0 0 0 0 0 0 0 0 0];
    //this.scale.set(0.05, 0.05);
    //this.anchor.setTo(0.5, 0.5);
    game.add.existing(this);
}

Player.prototype.update = function() {
	movePlayer();
	checkUsedItem();
}

var cursors = game.input.keyboard.createCursorKeys();

function movePlayer() {
	// controls player movement
	if (cursors.left.isDown)
		player.body.velocity.x = -150;
	else if (cursors.right.isDown) 
		player.body.velocity.x = 150;
	else if (cursors.up.isDown)
		player.body.velocity.y = 150;
	else if (cursors.down.isDown)
		player.body.velocity.y = -150;
}//Phaser.Keyboard.SPACEBAR

function checkUsedItem(){
	for (var i = 0;i<10;i++){
		var j = i+"";
		//if (cursors.j.isDown)
		//	useItem(inventory(i));
	}
}
/*
function useItem(item){
	if(item != 0) {
		if()
	}
}
*/