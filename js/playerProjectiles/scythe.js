//Scythe.js
Scythe.prototype = Object.create(Proj.prototype);
Scythe.prototype.constructor = Scythe;
Scythe.prototype.moveSpeed = 0;
Scythe.prototype.lifetime = 0.2;
Scythe.prototype.damage = 5;
Scythe.prototype.size = 1;
Scythe.prototype.angle = 0;
Scythe.prototype.isHoming = 0;
Scythe.prototype.isPlayers = 1;
Scythe.prototype.key = 'scythe';
Scythe.prototype.tag = "Scythe";
var isScythe = false;
function Scythe(game) {
	isScythe = true;
	Phaser.Sprite.call(this, game, player.body.x, player.body.y, this.key);
	game.physics.arcade.enable(this);
	this.anchor.set(0.5, 1);
	projectiles.add(this);
	this.scale.set(this.size,this.size);
	this.angle = player.angle;
}


Scythe.prototype.move = function() {
	this.body.x = player.body.x;
	this.body.y = player.body.y;
	this.angle += 3;
}

Scythe.prototype.end = function(){
	isScythe = false;
	this.destroy();
}