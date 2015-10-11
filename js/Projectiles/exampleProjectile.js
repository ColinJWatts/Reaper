exampleProjectile.prototype = Object.create(Proj.prototype);

exampleProjectile.prototype.constructor = exampleProjectile;

exampleProjectile.prototype.moveSpeed = 100;
exampleProjectile.prototype.lifetime = 2;
exampleProjectile.prototype.damage = 4;

exampleProjectile.prototype.size = 0.5;

function exampleProjectile(game, x, y, angle){
	Phaser.Sprite.call(this, game, x, y, this.key);
	this.angle = 360*angle/(2*Math.PI);

	this.scale.set(this.size, this.size);

	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	

	this.body.velocity.x = this.moveSpeed*Math.cos(2*Math.PI*this.angle/360);
	this.body.velocity.y = this.moveSpeed*Math.sin(2*Math.PI*this.angle/360);

}

exampleProjectile.prototype.move = function() {

}