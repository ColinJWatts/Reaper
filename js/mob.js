//Base code to govern mob behavior 

var Mob = function(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'cyan');
	this.game = game;
	this.farmX = x;
	this.farmY = y;
	this.key = 'cyan';
	game.add.existing(this);
}

Mob.prototype = Object.create(Phaser.Sprite.prototype);
Mob.prototype.constructor = Mob;
Mob.prototype.moveSpeed = 0;
Mob.prototype.attackSpeed = 0;
Mob.prototype.attackRange = 0;
Mob.prototype.sightRange = 0;
Mob.prototype.health = 0;
Mob.prototype.damage = 0;

Mob.prototype.tick = function(farm, time) {
	this.move();
	this.render();

}