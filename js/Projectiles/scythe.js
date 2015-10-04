//Scythe.js
Scythe.prototype = Object.create(Proj.prototype);
Scythe.prototype.constructor = Scythe;
Scythe.prototype.moveSpeed = 2;
Scythe.prototype.lifetime = .5;
Scythe.prototype.damage = 5;
Scythe.prototype.size = 10;
Scythe.prototype.angle = 0;
Scythe.prototype.isHoming = 0;
Scythe.prototype.isPlayers = 1;
Proj.prototype.key = 'blue';
Proj.prototype.tag = "Scythe";

function Scythe(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, key);
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	this.scale.set(size,size);
}


Scythe.prototype.move() {

	

}