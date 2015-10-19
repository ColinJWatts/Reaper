JackOLantern.prototype = Object.create(Proj.prototype);

JackOLantern.prototype.constructor = JackOLantern;
JackOLantern.prototype.key = 'pumpkin';

JackOLantern.prototype.moveSpeed = 1400;
JackOLantern.prototype.lifetime = 2;
JackOLantern.prototype.damage = 4;

JackOLantern.prototype.size = 0.75;

function JackOLantern(game, x, y, angle){
	Phaser.Sprite.call(this, game, x, y, this.key);
	this.angle = 360*angle/(2*Math.PI);

	this.scale.set(this.size, this.size);

	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	

	this.body.velocity.x = this.moveSpeed*Math.cos(2*Math.PI*this.angle/360);
	this.body.velocity.y = this.moveSpeed*Math.sin(2*Math.PI*this.angle/360);

}

JackOLantern.prototype.move = function() {
	this.body.velocity.x*= 0.9;
	this.body.velocity.y*= 0.9;
}