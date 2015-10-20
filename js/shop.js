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
		shopButton = game.add.button(100 + (game.width-200)*(i+.5)/shop.itemList[0].length, game.height/2 - 50, getKey(shop.itemList[0][i]))
		shopButton.onInputDown.add(function(){down(i, shop.itemList[0][i], false, priceFor(shop.itemList[0][i]))}, this);
		merch.add(shopButton);
	}
	var j = 0;
	for(var i = 0;i < 10;i++){
		if(inventory[0][i] != 0)
			j++;
	}
	for(var i = 1;i <= j;i++){
		invButton = game.add.button(100 + (game.width-200)*(i-.5)/j, game.height/2 + 50, getKey(inventory[0][i]))
		invButton.onInputDown.add(function(){down(i, inventory[0][i], true, priceFor(inventory[0][i]))}, this);
		invButtons.add(invButton);
	}
	//push player a bit away from shop so he doesn't automatically trigger overlap again
	if(direction == 2){
		player.body.position.x += 5;
	}
	if(direction == 0){
		player.body.position.x -= 5;
	}
	if(direction == 1){
		player.body.position.y += 5;
	}
	if(direction == 3){
		player.body.position.y -= 5;
	}
}

function down(index, itemNum, inInv, cost) {
    if(inInv){
    	money += cost;
		if(inventory[1][index] <= 1){
			inventory[0][index] = 0;
			inventory[1][index] = 0;
		}
		else {
			inventory[1][index] -= 1;
		}
		var i = 0;
		while(shop.itemList[0][i] != 0 && i < shop.itemList[0].length){
			i++;
		}
		shop.itemList[0][i] = itemNum;
		shop.itemList[1][i] = priceFor(itemNum);
	}
	else{

    }
}

function priceFor(itemNum){
	switch(itemNum){
		case 0:
			return 0;
		case 1:
			return 20;
		case 2:
			return 2;
		case 3:
			return 3;
		case 4:
			return 40;
		case 10:
			return 10;
		case 11:
			return 15;
	}
}

function onPress(){
	inShop = false;
	exitButton.destroy();
	merch.destroy();
	invButtons.destroy();
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
		case 4:
			this.key = 'scythe';
			break;
		case 10:
			this.key = 'corn';
			break;
		case 11:
			this.key = 'pumpkin';
			break;
		default:
			this.key = 'none';
			break;
	}
	return this.key;
}