
Field.prototype = Object.create(Phaser.Sprite.prototype);
Field.prototype.constructor = Field;

Field.prototype.grid = [];
Field.prototype.fieldSizeX = 0;
Field.prototype.fieldSizeY = 0;

function Field(game, sX, sY, x, y){
	Phaser.Sprite.call(this, game, x, y, 'yellow')
	this.fieldSizeX = sX;
	this.fieldSizeY = sY;
	this.grid = new Array(this.fieldSizeX);
	//console.log("created grid x");
	for(var i = 0; i < this.fieldSizeX; i++){
		this.grid[i] = new Array(this.fieldSizeY);
		//console.log("created grid[" + i + "]")
		for(var j = 0; j < this.fieldSizeY; j++){
			this.grid[i][j] = new Plant(game, this, i, j);
			//console.log("created grid[" + i + "][" + j + "]");
		}
	}
	game.add.existing(this);
	
}



//updates each plant tile in the field
Field.prototype.update = function(){
	for(var i = 0; i < this.fieldSizeX; i++){
		for(var j = 0; j < this.fieldSizeY; j++){
			this.grid[i][j].tick(this, game.time.elapsed/1000);
		}
	}
}


//x and y are grid positions, not world coordinates
Field.prototype.add = function(plant, age, x, y){
	if (x >= 0 && x < this.fieldSizeX && y >= 0 && y < this.fieldSizeY){
		var tmp = new plant(this.game, this, x, y)
		tmp.age = age;

		//console.log("PLAAAAAAAANT")
		//console.log(x);
		//console.log(y);
		//console.log(this.grid[x][y]);
		//console.log(tmp);

		if(this.grid[x][y].tag == tmp.tag){
			this.grid[x][y].spreadBonus();
			tmp.destroy();
		} else if(tmp.tag == 'dirt' || this.grid[x][y].tag == 'dirt'){
			this.grid[x][y].destroy();
			this.grid[x][y] = tmp;
			//console.log(this.grid[x][y])
		}
		else {
			tmp.destroy();
		}
	}
}

Field.prototype.count = function(plant){
	var n = 0;
	for(var i = 0; i < this.fieldSizeX; i++){
		for(var j = 0; j < this.fieldSizeY; j++){
			if(this.grid[i][j].tag == plant.tag)
				n++;
		}
	}
	console.log(n);
	return n;
}