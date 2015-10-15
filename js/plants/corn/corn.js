Corn.prototype = Object.create(Plant.prototype);
Corn.prototype.key = 'yellow';
Corn.prototype.constructor = Corn;
Corn.prototype.spreadThresh = 8;
Corn.prototype.spreadRate = 16;
Corn.prototype.spawnThresh = 4;
Corn.prototype.spawnRate = 30;
Corn.prototype.tag = 'corn';
Corn.prototype.spawnMob = Scarecrow;

//x and y are grid positions, not world coordinates
function Corn(game, field, x, y){
	Phaser.Sprite.call(this, game, x*64+field.x, y*64+field.y, this.key)
	this.farmX = x;
	this.farmY = y;
	this.anchor.set(0.5, 0.5);
	plants.add(this);
	//console.log("added examplePlant");
}


Corn.prototype.spread = function(age, field){
	var n = Math.floor(Math.random()*4);
	if(n == 0)
		field.add(Corn, age, this.farmX+1, this.farmY)
	else if (n == 1)
		field.add(Corn, age, this.farmX, this.farmY+1)
	else if (n == 2)
		field.add(Corn, age, this.farmX-1, this.farmY)
	else if (n == 3)
		field.add(Corn, age, this.farmX, this.farmY-1)
}

Corn.prototype.spreadBonus = function(){
	this.grow(4);
}

Corn.prototype.spawn = function(field){
	//console.log(countMob(this.spawnMob.prototype.tag));
	if(this.mob == null && countMob(this.spawnMob.prototype.tag) < Math.floor(field.count(this.tag)/9)){
		var enemy = new this.spawnMob(this.game, this.x, this.y, this);
		this.mob = enemy;
		mobs.add(enemy);
	}
}