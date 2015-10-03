//Base code to govern mob behavior 

var Mob = function() {
	this.game = game;
	this.farmX = x;
	this.farmY = y;
	this.key = 'white';
}

Mob.prototype = Object.create(Phaser.Sprite.prototype);
Mob.prototype.constructor = Mob;