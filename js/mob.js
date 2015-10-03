//Base code to govern mob behavior 
Mob.prototype = Object.create(Phaser.Sprite.prototype);
Mob.prototype.constructor = Mob;
Mob.prototype.moveSpeed = 0;
Mob.prototype.attackSpeed = 0;
Mob.prototype.attackRange = 0;
Mob.prototype.sightRange = 0;
Mob.prototype.health = 0;
Mob.prototype.damage = 0;
Mob.prototype.distanceToPlayer = 0;
Mob.prototype.angleToPlayer = 0;

function Mob(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'cyan');
	game.add.existing(this);
}



Mob.prototype.tick = function(farm, time) {
	var xDiff = player.x - this.position.x;
	var yDiff = player.y - this.position.y;
	this.distanceToPlayer = sqrt(xDiff*xDiff + yDiff*yDiff);
	this.angleToPlayer = Math.atan(yDiff/xDiff);
	this.move();
}