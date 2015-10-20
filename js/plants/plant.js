Plant.prototype = Object.create(Phaser.Sprite.prototype);
Plant.prototype.constructor = Plant;
Plant.prototype.spreadRate = 0;
Plant.prototype.spawnRate = 0; //low spawn rate means more mobs
Plant.prototype.spawnThresh = 0;
Plant.prototype.spreadThresh = 0;
Plant.prototype.age = 0;
Plant.prototype.lastSpawn = 0;
Plant.prototype.lastSpread = 0;
Plant.prototype.playerDamage = 0;
Plant.prototype.farmX = 0;
Plant.prototype.farmY = 0;
Plant.prototype.key = '';
Plant.prototype.tag = 'dirt';
Plant.prototype.spawnMob = Mob;
Plant.prototype.mob = null;
Plant.prototype.field = null;

//x and y are grid positions, not world coordinates
function Plant(game, field, x, y){
	Phaser.Sprite.call(this, game, x*64+field.x, y*64+field.y, this.key)
	this.field = field;
	this.farmX = x;
	this.farmY = y;
	this.age = 0;
	plants.add(this);
	//console.log("added plant");
}

Plant.prototype.tick = function(farm, time){
	this.render();
	this.grow(time);
	if(this.age > this.spawnThresh && this.lastSpawn + this.spawnRate < this.age - this.spawnThresh){
		this.lastSpawn += this.spawnRate;
		this.spawn(farm);
	}
	if(this.age > this.spreadThresh && this.lastSpread < this.age - this.spreadThresh){
		this.lastSpread += this.spreadRate;
		this.spread(this.age-this.lastSpread, farm);

	}
}



//show the appropriate sprite
Plant.prototype.render = function(){
	
}

//grow plants for time "time"
Plant.prototype.grow = function(time){
	//console.log(time);
	this.age += time;
}

//spawn mobs
Plant.prototype.spawn = function(field){
}

//spread more plants
Plant.prototype.spread = function(age, farm){
	//create plant with age "age" somewhere in field "farm"
}

//Spcial effects when a plant tries to grow into an adjacent plant
//can be used to exponentiate plant threat with plot size
Plant.prototype.spreadBonus = function(){


}