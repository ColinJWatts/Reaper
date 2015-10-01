var field = function(size){
	this.size = size;
	var grid;
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j] = Plant(i, j);
		}
	}

}

//updates each plant tile in the field
field.prototype.update = function(){
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j].tick(this, game.time.elapsed);
		}
	}
}

farm.prototype.add = function(plant, age, x, y){
	grid[x][y] = plant;
	grid[x][y].age = age;
}

farm.prototype.check = function(plant, x, y){
	if(grid[x][y] == plant)
		return true
	return false;
}