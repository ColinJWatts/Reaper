var examplePlant = function(game, x, y){
	this.game = game;
	this.farmX = x;
	this.farmY = y;

	this.key = 'green';
}

examplePlant.prototype = Object.create(Plant.prototype);
examplePlant.prototype.constructor = examplePlant;

examplePlant.prototype.spreadThresh = 5;
examplePlant.prototype.spreadRate = 1;


examplePlant.prototype.spread = function(age, farm){
	farm.add(examplePlant, this.farmX+1, this.farmY, age)
	farm.add(examplePlant, this.farmX, this.farmY+1, age)
	farm.add(examplePlant, this.farmX-1, this.farmY, age)
	farm.add(examplePlant, this.farmX, this.farmY-1, age)
}

examplePlant.prototype.spreadBonus = function(){
	//this.grow(1);
}