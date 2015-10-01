var Field = function(game, size){
	this.game = game;
	this.size = size;
	this.key = 'white';
	var grid = [];
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i] = [];
			grid[i][j] = new Plant(this.game, i, j);
		}
	}
}

Field.prototype = Object.create(Phaser.Sprite.prototype);
Field.prototype.size = 0;
Field.prototype.construtor = Field;

//updates each plant tile in the field
Field.prototype.update = function(){
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j].tick(this, game.time.elapsed);
		}
	}
}

Field.prototype.add = function(plant, age, x, y){
	if(this.check(plant, x, y)){
		this.grid[x][y].spreadBonus();
	} else{
		this.grid[x][y] = new plant(this.game, x, y);
		this.grid[x][y].age = age;
	}
}

Field.prototype.check = function(plant, x, y){
	if(x <= this.size || y <= this.size)
		return true;
	if(this.grid[x][y].prototype == plant)
		return true
	return false;
}