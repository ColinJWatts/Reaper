//projectile.js

Proj.prototype = Object.create(Phaser.Sprite.prototype);
Proj.prototype.constructor = Proj;
Proj.prototype.moveSpeed = 0;
Proj.prototype.lifetime = 0;
Proj.prototype.damage = 0;
Proj.prototype.size = 1;
Proj.prototype.health = 0;
Proj.prototype.angle = 0;
Proj.prototype.isHoming = 0;
Proj.prototype.isPlayers = 0;
Proj.prototype.distanceToPlayer = 0;
Proj.prototype.angleToPlayer = 0;
Proj.prototype.key = 'blue';
Proj.prototype.tag = "";

function Proj(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, key);
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	this.scale.set(size,size);
}

Mob.prototype.update = function(farm, time) {
	if (this.isHoming) {
		var xDiff = player.x - this.position.x;
		var yDiff = player.y - this.position.y;
		this.distanceToPlayer = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
		this.angleToPlayer = Math.atan2(yDiff, xDiff); //+Math.PI/2; (use for protective plants)
	}

	//movement
	this.move();

	if(this.lifetime <= 0) {
		this.destroy();
	}
	this.lifetime -= game.time.elapsed/1000;

}


Mob.prototype.move() {

}