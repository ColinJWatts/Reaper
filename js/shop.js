Shop.prototype = Object.create(Phaser.Sprite.prototype);

Shop.prototype.constructor = Shop;
Shop.prototype.key = 'shop';
Shop.prototype.itemList = [[0],[0]];

function Shop(game, x, y, key, itemList){
	/*Phaser.Sprite.call(this, game, x, y, key);
	game.add.existing(this);
	game.physics.arcade.enable(this);*/
	this.itemList = itemList;

	var numItems = this.itemList.length;
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
	}
}

/*Shop.prototype.update = function(){
	game.physics.arcade.overlap(this, player, buySell);
}

function buySell(shop, player){
	//pause game (or at least growing of plants, etc) function: talk to Quinn
	//currently the game will create a shop for each frame the player is over the shop;
	//when the pause is implemented this should fix itself so I'm not worrying about it right now
	var merch = [0];
	for(var i = 0;i < shop.itemList[0].length;i++){
		merch[i] = new Item(game, 100 + game.width*i/5, 300, 'white', false, 1, shop.itemList[0][i]);
		merch[i].cost = shop.itemList[1][i];
	}
	console.log(merch);
	shop.destroy();
}*/