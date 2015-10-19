

Pumpkin.prototype = Object.create(Plant.prototype);
Pumpkin.prototype.key = 'magenta';
Pumpkin.prototype.constructor = Pumpkin;
Pumpkin.prototype.spreadThresh = 20;
Pumpkin.prototype.spreadRate = 40;
Pumpkin.prototype.spawnThresh = 15;
Pumpkin.prototype.spawnRate = 30;
Pumpkin.prototype.tag = 'pumpkin';
Pumpkin.prototype.spawnMob = Horseman;

//x and y are grid positions, not world coordinates
function Pumpkin(game, field, x, y){
	Phaser.Sprite.call(this, game, x*64+field.x, y*64+field.y, this.key)
	this.field = field;
	this.farmX = x;
	this.farmY = y;
	this.anchor.set(0.5, 0.5);
	plants.add(this);
	//console.log("added examplePlant");
}


Pumpkin.prototype.spread = function(age, field){
	field.add(Pumpkin, age, this.farmX+1, this.farmY);
	field.add(Pumpkin, age, this.farmX, this.farmY+1);
	field.add(Pumpkin, age, this.farmX-1, this.farmY);
	field.add(Pumpkin, age, this.farmX, this.farmY-1);
}

Pumpkin.prototype.spreadBonus = function(){
	this.grow(this.spreadRate/4);
}

Pumpkin.prototype.spawn = function(field){
	//console.log(countMob(this.spawnMob.prototype.tag));
	if(this.mob == null && countMob(this.spawnMob.prototype.tag) < field.count(this.tag)/16){
		var enemy = new this.spawnMob(this.game, this.x, this.y);
		this.mob = enemy;
		mobs.add(enemy);
	}
}