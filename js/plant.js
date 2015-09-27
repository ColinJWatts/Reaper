var plant = function(){
	this.growSpeed = 0;
	this.spreadRate = 0; 
	this.spawnRate = 0; //low spawn rate means more mobs
	this.spawnThresh = 0;
	this.spreadThresh = 0;

	this.age = 0;
	this.lastSpawn = 0;
	this.lastSpread = 0;

	this.playerDamage = 0;
}


plant.prototype.update = function(){
	this.grow(game.time.elapsed);
	if(this.age > this.spawnThresh && this.lastSpawn + this.spawnRate < this.age){
		this.spawn();
		this.lastSpawn += this.spawnRate;
	}
	if(this.age > this.spreadThresh && this.lastSpread + this.spreadRate < this.age){
		this.spread(this.age-this.lastSpread);
		this.lastSpread += this.spreadRate;
	}
}

//grow plants for time "time"
plant.prototype.grow(time){
	this.age += this.growSpeed * time;
}

//spawn mobs
plant.prototype.spawn(){
	//create mob
}

//spread more plants
plant.prototype.spread(age){
	//create plant with age "age"
}