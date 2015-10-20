//Base code to govern mob behavior 
Mob.prototype = Object.create(Phaser.Sprite.prototype);
Mob.prototype.constructor = Mob;
Mob.prototype.moveSpeed = 0;
Mob.prototype.attackSpeed = 0;
Mob.prototype.attackRange = 0;
Mob.prototype.sightRange = 0;
Mob.prototype.health = 1;
Mob.prototype.damage = 0;
Mob.prototype.distanceToPlayer = 0;
Mob.prototype.angleToPlayer = 0;
Mob.prototype.attackTimer = 0;
Mob.prototype.projectile = Proj;
Mob.prototype.key = 'cyan';
Mob.prototype.tag = "";

function Mob(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, key);
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	game.add.existing(this);
}

Mob.prototype.update = function(farm, time) {
	if(inShop){
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		return;
	}
	var xDiff = player.x - this.position.x;
	var yDiff = player.y - this.position.y;
	this.distanceToPlayer = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
	this.angleToPlayer = Math.atan2(yDiff, xDiff); //+Math.PI/2; (use for protective plants)
	if(this.distanceToPlayer <= this.sightRange) {
		this.moveTowardPlayer();
	} else {
		this.idleMove();
	}
	if(this.attackTimer <= 0 && this.distanceToPlayer <= this.attackRange) {
		this.attack();
		this.attackTimer = this.attackSpeed;
	}
	this.attackTimer -= game.time.elapsed/1000;

	if (this.health <= 0) {
		this.end();
	}


}

Mob.prototype.moveTowardPlayer = function() {

}

Mob.prototype.idleMove = function() {

}

Mob.prototype.end = function(){
	this.destroy();
}

Mob.prototype.attack = function() {

}

function countMob(tag){
	var count = 0;
	for(var i = 0; i < mobs.length; i++){
		if(mobs.getChildAt(i).tag == tag)
			count++;
	}
	return count;
}