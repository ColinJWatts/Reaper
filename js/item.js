Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype.constructor = Item;
Item.prototype.key = 'item';
Item.prototype.itemNum = 0;


function Item(game,x,y,key,inInv,inv_slot,itemNum){
	this.itemNum = itemNum;
	this.key = key;
	if(inInv)
		inventory[0][inv_slot] = itemNum;
	else{
		Phaser.Sprite.call(this, game, x, y, key);
		game.add.existing(this);
		game.physics.arcade.enable(this);
	}
	items.add(this);
}

function collectItem (player, item) {
	var inInv = false;
	var firstEmptySlot;
	//0 is a special case since it's actually the farthest key
	//without taking these conditionals outside the loop the first empty slot
	//will usually default to 0, not 1 or 2 or one of the early keys
	if(inventory[0][0]==item.itemNum){
			inventory[1][0] += 1;
			inInv = true;
	}
	if(inventory[0][0] == 0){
		firstEmptySlot = 0;
	}
	//loop through other keys
	for(var i = 9;i>0;i--){
		if(inventory[0][i]==item.itemNum){
			inventory[1][i] += 1;
			inInv = true;
		}
		if(inventory[0][i] == 0){
			firstEmptySlot = i;
		}
	}
	//if the item isn't in the inventory already
	if(!inInv){
		inventory[0][firstEmptySlot] = item.itemNum;
		inventory[1][firstEmptySlot] = 1;
	}
	item.destroy();
	console.log(inventory);
}

function useItem(itemNum, inv_slot){
	if (itemNum == 1){
		useShovel(currField);
	}
	if (itemNum == 2) {
		plantExamplePlant(currField, inventory, inv_slot);
	}

	/*
		//Scythe
		case 2: 
			useScythe();
			break;
		//Gun: useGun(1) = basic gun, useGun(2) = more advanced, etc.
		case 3: 
			useGun(1);
			break;
		case 4: 
			useGun(2);
			break;
			*/
}

function useShovel(field) {

	console.log("Using shovel...");
	var mouseX = game.input.mousePointer.x;
	var mouseY = game.input.mousePointer.y;
	var playerX = player.position.x;
	var playerY = player.position.y;


	fieldX = field.x;
	fieldY = field.y;

	var x = Math.floor((mouseX - fieldX)/64);
	var y = Math.floor((mouseY - fieldY)/64);
	if( ((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
		field.add(Plant, 0, x, y);
	}
}

function plantExamplePlant(field, inv_slot) {

	console.log("Planting...");
	var mouseX = game.input.mousePointer.x;
	var mouseY = game.input.mousePointer.y;
	var playerX = player.position.x;
	var playerY = player.position.y;

	fieldX = field.x;
	fieldY = field.y;


	var x = Math.floor((mouseX - fieldX)/64);
	var y = Math.floor((mouseY - fieldY)/64);
	if( ((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
		field.add(examplePlant, 0, x, y);
		if(inventory[1][inv_slot] > 0)
			inventory[1][inv_slot] -= 1;
		else
			inventory[0][inv_slot] = 0;
	}
}