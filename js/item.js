Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype.constructor = Item;
Item.prototype.inInv = false;
Item.prototype.key = 'item';
Item.prototype.itemNum = 0;

function Item(game,x,y,key,inInv,inv_slot,itemNum){
	if(inInv)
		player.inventory[inv_slot] = itemNum;
	else
		Phaser.Sprite.call(this, game, x, y, key);
}

function useItem(itemNum, inventory, inv_slot){
		//shovel
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
	//Shovel.prototype = Object.create(Phaser.Sprite.prototype);
	//Shovel.prototype.constructor = Shovel;

	console.log("Using shovel...");
	var mouseX = game.input.mousePointer.x;
	var mouseY = game.input.mousePointer.y;
	var playerX = player.position.x;
	var playerY = player.position.y;
	//console.log(mouseX);
	//console.log(mouseY);
	//console.log(playerX);
	//console.log(playerY);
	console.log("\n");

	fieldX = field.x;
	fieldY = field.y;

	var x = Math.floor((mouseX - fieldX)/64);
	var y = Math.floor((mouseY - fieldY)/64);
	if( ((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
		field.add(Plant, 0, x, y);
	}
}

function plantExamplePlant(field, inventory, inv_slot) {
	//Shovel.prototype = Object.create(Phaser.Sprite.prototype);
	//Shovel.prototype.constructor = Shovel;

	console.log("Planting...");
	var mouseX = game.input.mousePointer.x;
	var mouseY = game.input.mousePointer.y;
	var playerX = player.position.x;
	var playerY = player.position.y;
	//console.log(mouseX);
	//console.log(mouseY);
	//console.log(playerX);
	//console.log(playerY);
	console.log("\n");

	fieldX = field.x;
	fieldY = field.y;


	var x = Math.floor((mouseX - fieldX)/64);
	var y = Math.floor((mouseY - fieldY)/64);
	if( ((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
		field.add(examplePlant, 0, x, y);
		inventory[inv_slot]=0;
		player.currentItem = 0;
		console.log("inventory:" + inventory[0] + inventory[1] + inventory[2]);
	}
}

function Sythe(field, inventory, inv_slot) {
	console.log("SWOOSH\n");
	var mouseX = game.input.mousePointer.x;
	var mouseY = game.input.mousePointer.y;
	var playerX = player.position.x;
	var playerY = player.position.y;
	if( ((mouseX > playerX && playerX+128>mouseX) || (mouseX < playerX && playerX-128<mouseX)) && ((mouseY > playerY && playerY+128>mouseY) || (mouseY<playerY && playerY-128<mouseY))) {
		
	}
}