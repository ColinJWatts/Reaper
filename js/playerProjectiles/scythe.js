//Scythe.js
Scythe.prototype = Object.create(Proj.prototype);
Scythe.prototype.constructor = Scythe;
Scythe.prototype.moveSpeed = 0;
Scythe.prototype.lifetime = 0.20;
Scythe.prototype.damage = 5;
Scythe.prototype.size = 1;
Scythe.prototype.angle = 0;
Scythe.prototype.isHoming = 0;
Scythe.prototype.isPlayers = 1;
Scythe.prototype.isPiercing = 1;
Scythe.prototype.key = 'scythe';
Scythe.prototype.tag = "Scythe";
var isScythe = false;
function Scythe(game) {
	Phaser.Sprite.call(this, game, 0, 0, this.key);
	this.anchor.set(-0.3, 0.3);
	this.scale.set(this.size,this.size);
	this.angle = player.angle+180;
	game.physics.arcade.enable(this);
	this.body.x = 0;
	this.body.y = 0;
	projectiles.add(this);
	isScythe = true;
}


Scythe.prototype.move = function() {
	this.body.x = player.x+19.2;
	this.body.y = player.y-19.2;
	this.angle += this.lifetime*50+6;
}

Scythe.prototype.end = function(){
	isScythe = false;
	this.destroy();
}