exampleProjectile.prototype = Object.create(Proj.prototype);

exampleProjectile.prototype.constructor = exampleProjectile;

exampleProjectile.prototype.moveSpeed = 5;
exampleProjectile.prototype.lifetime = 2;
exampleProjectile.prototype.damage = 4;

function exampleProjectile(game, x, y, angle){
	Phaser.Sprite.call(this, game, x, y, this.key);
	this.angle = angle;
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	this.scale.set(this.size, this.size);

	this.body.velocity.x = this.moveSpeed*Math.sin(this.angle);
	this.body.velocity.y = this.moveSpeed*Math.cos(this.angle);
}

exampleProjectile.prototype.move = function() {

}