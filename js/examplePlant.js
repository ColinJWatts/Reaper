

examplePlant.prototype = Object.create(Plant.prototype);
examplePlant.prototype.key = 'green';
examplePlant.prototype.constructor = examplePlant;
examplePlant.prototype.spreadThresh = 1;
examplePlant.prototype.spreadRate = 1;
examplePlant.prototype.tag = 'example';

//x and y are grid positions, not world coordinates
function examplePlant(game, x, y){
	Phaser.Sprite.call(this, game, x*64, y*64, this.key)
	this.farmX = x;
	this.farmY = y;

	game.add.existing(this);
	console.log("added examplePlant");
}


examplePlant.prototype.spread = function(age, farm){
	farm.add(examplePlant, age, this.farmX+1, this.farmY)
	farm.add(examplePlant, age, this.farmX, this.farmY+1)
	farm.add(examplePlant, age, this.farmX-1, this.farmY)
	farm.add(examplePlant, age, this.farmX, this.farmY-1)
}

examplePlant.prototype.spreadBonus = function(){
	this.grow(0.25);
}