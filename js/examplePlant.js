

examplePlant.prototype = Object.create(Plant.prototype);
examplePlant.prototype.key = 'green';
examplePlant.prototype.constructor = examplePlant;
examplePlant.prototype.spreadThresh = 3;
examplePlant.prototype.spreadRate = 4;
examplePlant.prototype.spawnThresh = 1;
examplePlant.prototype.spawnRate = 20;
examplePlant.prototype.tag = 'example';
examplePlant.prototype.mob = exampleMob;

//x and y are grid positions, not world coordinates
function examplePlant(game, field, x, y){
	Phaser.Sprite.call(this, game, x*64+field.x, y*64+field.y, this.key)
	this.farmX = x;
	this.farmY = y;

	plants.add(this);
	//console.log("added examplePlant");
}


examplePlant.prototype.spread = function(age, field){
	var n = Math.floor(Math.random()*4);
	if(n == 0)
		field.add(examplePlant, age, this.farmX+1, this.farmY)
	else if (n == 1)
		field.add(examplePlant, age, this.farmX, this.farmY+1)
	else if (n == 2)
		field.add(examplePlant, age, this.farmX-1, this.farmY)
	else if (n == 3)
		field.add(examplePlant, age, this.farmX, this.farmY-1)
}

examplePlant.prototype.spreadBonus = function(){
	this.grow(1.5);
}

examplePlant.prototype.spawn = function(field){
	if(mobs.countAlive < field.count(this.constructor)){
		var enemy = new this.mob(this.game, this.x, this.y);
		mobs.add(enemy);
	}
}