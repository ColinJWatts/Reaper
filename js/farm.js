
Field.prototype = Object.create(Phaser.Sprite.prototype);
Field.prototype.constructor = Field;

Field.prototype.grid = [];
Field.prototype.fieldSize = 0;

function Field(game, s, x, y){
	Phaser.Sprite.call(this, game, x, y, 'yellow')
	this.fieldSize = s;
	this.grid = new Array(this.fieldSize);
	//console.log("created grid x");
	for(var i = 0; i < this.fieldSize; i++){
		this.grid[i] = new Array(this.fieldSize);
		//console.log("created grid[" + i + "]")
		for(var j = 0; j < this.fieldSize; j++){
			this.grid[i][j] = new Plant(game, i, j);
			//console.log("created grid[" + i + "][" + j + "]");
		}
	}
	game.add.existing(this);
	
}



//updates each plant tile in the field
Field.prototype.update = function(){
	for(var i = 0; i < this.fieldSize; i++){
		for(var j = 0; j < this.fieldSize; j++){
			this.grid[i][j].tick(this, game.time.elapsed/1000);
		}
	}
}


//x and y are grid positions, not world coordinates
Field.prototype.add = function(plant, age, x, y){
	if (x >= 0 && x < this.fieldSize && y >= 0 && y < this.fieldSize){
		var tmp = new plant(this.game, x, y)
		tmp.age = age;

		//console.log("PLAAAAAAAANT")
		//console.log(x);
		//console.log(y);
		//console.log(this.grid[x][y]);
		//console.log(tmp);

		if(this.grid[x][y].tag == tmp.tag){
			this.grid[x][y].spreadBonus();
			tmp.kill();
		} else if(this.grid[x][y].tag == 'dirt'){
			this.grid[x][y].kill();
			this.grid[x][y] = tmp;
			//console.log(this.grid[x][y])
		}
	}
}