

examplePlant.prototype = Object.create(Plant.prototype);
examplePlant.prototype.key = 'green';
examplePlant.prototype.constructor = examplePlant;
examplePlant.prototype.spreadThresh = 3;
examplePlant.prototype.spreadRate = 4;
examplePlant.prototype.spawnThresh = 1;
examplePlant.prototype.spawnRate = 5;
examplePlant.prototype.tag = 'example';
examplePlant.prototype.spawnMob = exampleMob;

//x and y are grid positions, not world coordinates
function examplePlant(game, field, x, y){
	Phaser.Sprite.call(this, game, x*64+field.x, y*64+field.y, this.key)
	this.farmX = x;
	this.farmY = y;
	this.anchor.set(0.5, 0.5);
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
	//console.log(countMob(this.spawnMob.prototype.tag));
	if(this.mob == null && countMob(this.spawnMob.prototype.tag) < field.count(this.tag)/4){
		var enemy = new this.spawnMob(this.game, this.x, this.y);
		this.mob = enemy;
		mobs.add(enemy);
	}
}