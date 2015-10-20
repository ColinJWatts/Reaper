//Bullet.js
Bullet.prototype = Object.create(Proj.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.moveSpeed = 500;
Bullet.prototype.lifetime = 0.8;
Bullet.prototype.damage = 1;
Bullet.prototype.size = 0.2;
Bullet.prototype.isHoming = 0;
Bullet.prototype.isPlayers = 1;
Bullet.prototype.isPiercing = false;
Bullet.prototype.key = 'black';
Bullet.prototype.tag = "Bullet";
function Bullet(game) {
	Phaser.Sprite.call(this, game, player.x, player.y, this.key);
	
	this.scale.set(this.size,this.size);
	this.anchor.set(0.5, 0.5);
	this.angle = player.angle + Math.random()*30-15-90;
	game.physics.arcade.enable(this);

	this.body.velocity.x = this.moveSpeed*Math.cos(this.rotation);
	this.body.velocity.y = this.moveSpeed*Math.sin(this.rotation);
	projectiles.add(this);
}