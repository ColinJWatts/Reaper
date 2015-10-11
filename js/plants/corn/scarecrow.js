//Example Mob

Scarecrow.prototype = Object.create(Mob.prototype);
Scarecrow.prototype.key = 'cyan';
Scarecrow.prototype.constructor = Scarecrow;
Scarecrow.prototype.moveSpeed = 200;
Scarecrow.prototype.attackRange = 100000;
Scarecrow.prototype.sightRange = 275;
Scarecrow.prototype.health = 1;
Scarecrow.prototype.attackSpeed = 0.3;
Scarecrow.prototype.projectile = Crow;
Scarecrow.prototype.tag = 'scarecrow';
Scarecrow.prototype.origin = null;
Scarecrow.prototype.birdRange = 150;

//x and y are world coordinates, not grid positions
function Scarecrow(game, x, y, origin){
	Phaser.Sprite.call(this, game, x, y, this.key)
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	game.add.existing(this);
	this.origin = origin;
}

Scarecrow.prototype.moveTowardPlayer = function() {
	var speed = this.moveSpeed*(Math.sin(game.time.now/100)+1)
	this.rotation = this.angleToPlayer;

	this.body.velocity.x = speed*Math.cos(this.angleToPlayer)*Math.tanh((this.distanceToPlayer-this.birdRange)/10);
	this.body.velocity.y = speed*Math.sin(this.angleToPlayer)*Math.tanh((this.distanceToPlayer-this.birdRange)/10);
	
}

Scarecrow.prototype.idleMove = function() {
	var xDiff = this.origin.x - this.position.x;
	var yDiff = this.origin.y - this.position.y;
	var distanceToOrigin = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
	var angleToOrigiin = Math.atan2(yDiff, xDiff);

	var speed = this.moveSpeed*(Math.sin(game.time.now/250)+1)

	this.body.velocity.x = speed*Math.cos(angleToOrigiin)*Math.tanh(distanceToOrigin/10);
	this.body.velocity.y = speed*Math.sin(angleToOrigiin)*Math.tanh(distanceToOrigin/10);
}

Scarecrow.prototype.attack = function() {
	projectiles.add(new this.projectile(this.game, this.x, this.y, this));
}