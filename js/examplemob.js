//Example Mob

exampleMob.prototype = Object.create(Mob.prototype);
exampleMob.prototype.key = 'cyan';
exampleMob.prototype.constructor = exampleMob;
exampleMob.prototype.moveSpeed = 300;
exampleMob.prototype.attackRange = 100;
exampleMob.prototype.sightRange = 200;
exampleMob.prototype.health = 1;
exampleMob.prototype.attackSpeed = .5;
exampleMob.prototype.tag = 'exampleMob';


//x and y are world coordinates, not grid positions
function exampleMob(game, x, y){
	Phaser.Sprite.call(this, game, x, y, this.key)
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	game.add.existing(this);
}

exampleMob.prototype.moveTowardPlayer = function() {
	if(this.distanceToPlayer > this.attackRange){
		this.rotation = this.angleToPlayer;
		this.body.velocity.x = this.moveSpeed*Math.cos(this.angleToPlayer);
		this.body.velocity.y = this.moveSpeed*Math.sin(this.angleToPlayer);
	} else if (this.distanceToPlayer < this.attackRange){
		this.rotation = this.angleToPlayer;
		this.body.velocity.x = -this.moveSpeed*Math.cos(this.angleToPlayer);
		this.body.velocity.y = -this.moveSpeed*Math.sin(this.angleToPlayer);
	}
}

exampleMob.prototype.idleMove = function() {
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;	
}

exampleMob.prototype.attack = function() {
	console.log("BAM");
}