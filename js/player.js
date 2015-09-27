function initPlayer(x,y) {
	player = game.add.sprite(x, y, 'dude');
	inventory = [0 0 0 0 0 0 0 0 0 0];
}

function updatePlayer() {
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
	// inventory management
	invSlots = [1 2 3 4 5 6 7 8 9 0];
	for (var i = 0;i<10;i++){
		var j = i+"";
		if (cursors.j.isDown)
			useItem(i);
	}
}

function useItem(i){

}