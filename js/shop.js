Shop.prototype = Object.create(Phaser.Sprite.prototype);

Shop.prototype.constructor = Shop;
Shop.prototype.key = 'shop';
Shop.prototype.itemList = [[0],[0]];

function Shop(game, x, y, key, itemList){
	Phaser.Sprite.call(this, game, x, y, key);
	game.add.existing(this);
	this.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(this);
	this.itemList = itemList;
}

Shop.prototype.update = function(){
	if(!inShop)
		game.physics.arcade.overlap(this, player, buySell);
}

function buySell(shop, player){
	merch = game.add.group();
	invButtons = game.add.group();
	exitButton = game.add.button(game.width/2 - 372/2, game.height-150, 'exitButton', onPress, this);
	inShop = true;
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;
	for(var i = 0;i < shop.itemList[0].length;i++){
		merch.add(game.add.button(100 + (game.width-200)*(i+.5)/shop.itemList[0].length, game.height/2 - 50, getKey(shop.itemList[0][i]), capitalism, this));
	}
	for(var i = 1;i < 10;i++){
		invButtons.add(game.add.button(100 + (game.width-200)*(i-.5)/10, game.height/2 + 50, getKey(inventory[0][i]), capitalism, this));
	}
	invButtons.add(game.add.button(100 + 9.5*(game.width-200), game.height/2 + 50, getKey(inventory[0][0]), capitalism, this));
	//push player a bit away from shop so he doesn't automatically trigger overlap again
	if(direction == 2){
		player.body.position.x += 2;
	}
	if(direction == 0){
		player.body.position.x -= 2;
	}
	if(direction == 1){
		player.body.position.y += 2;
	}
	if(direction == 3){
		player.body.position.y -= 2;
	}
}

function onPress(){
	console.log("button pressed")
	inShop = false;
	exitButton.destroy();
	merch.destroy();
	invButtons.destroy();
}

function capitalism(){
	console.log("CAPITALISM")
}

function getKey(itemNum){
	switch(itemNum){
		case 1: 
			this.key = 'shovel';
			break;
		case 2:
			this.key = 'cornPlant';
			break;
		case 3:
			this.key = 'pumpkinPlant';
			break;
		default:
			this.key = 'invisible';
			break;
	}
	return this.key;
}
/*var numItems = this.itemList.length;
	var sizeBox = (game.world.width - 200)/numItems;
	var yItemsUp = game.world.height/2 - sizeBox/2;
	var yItemsDown = game.world.height/2 + sizeBox/2;
	var xItems = [];
	for(var i = 0;i<numItems;i++){
		xItems[i] = 100 + sizeBox*i;
	}

	shop_label = game.add.text(x, y, 'Buying and Selling', { font: '10px Arial', fill: '#fff' });
	shop_label.inputEnabled = true;
	shop_label.events.onInputUp.add(function () {
		// Right now this is a "click on the shop to buy/sell stuff" kind of shop
		// I still have the functionality for a "walk into the shop to buy/sell stuff" shop, commented out
		game.paused = true;

		shop_interface = game.add.sprite(game.world.width/2, game.world.height/2, key);
		shop_interface.anchor.setTo(0.5, 0.5);
	});

	game.input.onDown.add(inShop, this);
	
	function inShop(event){
		if(game.paused) {
			console.log('I am a test\nFEAR ME\n');
			if(event.x > xItems[0] && event.x < game.world.width - 100 && event.y > yItemsUp && event.y < yItemsDown){
				var choice = Math.floor((event.x - xItems[0])/sizeBox);
				console.log(choice);
			}
		}
		else {
			shop_interface.destroy();
			game.paused = false;
		}
	}*/