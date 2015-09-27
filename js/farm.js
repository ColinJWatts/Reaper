var field = function(size)
	this.size = size;
	var grid;
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j] = -1;
		}
	}

}

//renders the field
field.prototype.render(){
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j].update();
		}
	}
}

//updates each plant tile in the field
field.prototype.update(){
	for(var i = 0; i < this.size; i++){
		for(var j = 0; j < this.size; j++){
			grid[i][j].update();
		}
	}
}