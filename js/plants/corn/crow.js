Crow.prototype = Object.create(Proj.prototype);

Crow.prototype.constructor = Crow;
Crow.prototype.key = "black";
Crow.prototype.moveSpeed = 300;
Crow.prototype.lifetime = 9;
Crow.prototype.damage = 4;

Crow.prototype.size = 0.5;
Crow.prototype.origin = null;
Crow.prototype.distDiff = 0;

function Crow(game, x, y, origin){
	Phaser.Sprite.call(this, game, x, y, this.key);

	this.scale.set(this.size, this.size);
	this.distDiff = Math.random()*100-25;
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	this.origin = origin;
	
}

Crow.prototype.move = function() {
	var xDiff = this.origin.x - this.position.x;
	var yDiff = this.origin.y - this.position.y;
	var distanceToOrigin = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
	var angleToOrigin = Math.atan2(yDiff, xDiff);
	
	this.rotation = angleToOrigin+90*Math.tanh((distanceToOrigin - this.origin.birdRange+this.distDiff)/10);

	this.body.velocity.x = this.moveSpeed*Math.cos(2*Math.PI*this.angle/360);
	this.body.velocity.y = this.moveSpeed*Math.sin(2*Math.PI*this.angle/360);
}