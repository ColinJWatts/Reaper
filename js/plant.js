Plant.prototype = Object.create(Phaser.Sprite.prototype);
Plant.prototype.constructor = Plant;
Plant.prototype.growSpeed = 0;
Plant.prototype.spreadRate = 0;
Plant.prototype.spawnrate = 0; //low spawn rate means more mobs
Plant.prototype.spawnThresh = 0;
Plant.prototype.spreadThresh = 0;
Plant.prototype.age = 0;
Plant.prototype.lastSpawn = 0;
Plant.prototype.lastSpread = 0;
Plant.prototype.playerDamage = 0;
Plant.prototype.farmX = 0;
Plant.prototype.farmY = 0;

Plant.prototype.Plant = function(x, y){

	this.farmX = x;
	this.farmY = y;

	this.sprite = new sprite(game, x*64, y*64, 'black');
}


Plant.prototype.tick = function(farm, time){
	this.render();
	this.grow(time);
	if(this.age > this.spawnThresh && this.lastSpawn + this.spawnRate < this.age - this.spawnThresh){
		this.spawn();
		this.lastSpawn += this.spawnRate;
	}
	if(this.age > this.spreadThresh && this.lastSpread + this.spreadRate < this.age - this.spreadThresh){
		this.spread(this.age-this.lastSpread, farm);
		this.lastSpread += this.spreadRate;
	}
}

Plant.prototype.render = function(){
	
}

//grow plants for time "time"
Plant.prototype.grow = function(time){
	this.age += this.growSpeed * time;
}

//spawn mobs
Plant.prototype.spawn = function(){
	//create mob
}

//spread more plants
Plant.prototype.spread = function(age, farm){
	//create plant with age "age" somewhere in field "farm"
}