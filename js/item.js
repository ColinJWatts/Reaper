Item.prototype = Object.create(Phaser.Sprite.prototype);

Item.prototype.constructor = Item;
Item.prototype.key = 'item';
Item.prototype.itemNum = 0;
Item.prototype.cost = 0;

function Item(game,x,y,key,inInv,inv_slot,itemNum){
	this.itemNum = itemNum;
	this.key = key;
	this.cost = 0;
	if(inInv)
		inventory[0][inv_slot] = itemNum;
	else{
		Phaser.Sprite.call(this, game, x, y, key);
		game.add.existing(this);
		game.physics.arcade.enable(this);
	}
	items.add(this);
}

function fromNum(itemNum){
	switch(itemNum){
		case 1: 
			this.key = 'green';//'shovel';
			break;
		case 2:
			this.key = 'blue';//'cornSeed';
			break;
		case 3:
			this.key = 'magenta';//'pumpSeed';
			break;
	}
}

function collectItem (player, item) {
	if(money < item.cost)
		return;
	money -= item.cost;
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
}

function useItem(itemNum, inv_slot){
	if (itemNum == 1)
		useShovel(currField);
	if (itemNum == 2) 
		plantPlant(currField, inv_slot, Corn);
	if (itemNum == 3)
		plantPlant(currField, inv_slot, Pumpkin);
	if (itemNum == 4)
		useScythe();
	if (itemNum == 5)
		useGun();
	if(itemNum == 10)
		console.log("use corn");
	if(itemNum == 11)
		console.log("use pumpkin");

}

function useShovel(field) {
	if(currField != null){
		console.log("Using shovel...");
		var mouseX = game.input.mousePointer.x + game.camera.x;
		var mouseY = game.input.mousePointer.y + game.camera.y;
		var playerX = player.position.x;
		var playerY = player.position.y;

		fieldX = field.x;
		fieldY = field.y;

		var x = Math.floor((mouseX - fieldX)/64);
		var y = Math.floor((mouseY - fieldY)/64);
		if( ((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
			digSound = game.sound.play('dig');
			field.add(Plant, 0, x, y);
		}
	}
}

function useScythe(){
	if(!isScythe){
		playerProjectiles.add(new Scythe(game));
		game.sound.play('scythe');
	}
}

function useGun(){
	playerProjectiles.add(new Bullet(game));
	game.sound.play('gun');
}

function plantPlant(field, inv_slot, plant) {
	if (currField != null){
		if(inventory[1][inv_slot] > 0){
			inventory[1][inv_slot] -= 1;
		}
		else {
			inventory[0][inv_slot] = 0;
			return;
		}

		console.log("Planting...");
		var mouseX = game.input.mousePointer.x + game.camera.x;
		var mouseY = game.input.mousePointer.y + game.camera.y;
		var playerX = player.position.x;
		var playerY = player.position.y;

		fieldX = field.x;
		fieldY = field.y;

		var x = Math.floor((mouseX - fieldX)/64);
		var y = Math.floor((mouseY - fieldY)/64);

		if(((mouseX > playerX && playerX+96>mouseX) || (mouseX < playerX && playerX-96<mouseX)) && ((mouseY > playerY && playerY+96>mouseY) || (mouseY<playerY && playerY-96<mouseY))) {
			if(!field.place(plant, x, y))
				inventory[1][inv_slot]++;
			else
				digSound = game.sound.play('plant');
		} 
	}
}