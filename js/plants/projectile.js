//projectile.js

Proj.prototype = Object.create(Phaser.Sprite.prototype);
Proj.prototype.constructor = Proj;
Proj.prototype.moveSpeed = 0;
Proj.prototype.lifetime = 0;
Proj.prototype.damage = 0;
Proj.prototype.size = 1;
Proj.prototype.angle = 0;
Proj.prototype.isHoming = false;
Proj.prototype.isPlayers = 0;
Proj.prototype.isPiercing = false;
Proj.prototype.distanceToPlayer = 0;
Proj.prototype.angleToPlayer = 0;
Proj.prototype.key = 'blue';
Proj.prototype.tag = "";

function Proj(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, this.key);
	this.anchor.set(0.5, 0.5);
	game.physics.arcade.enable(this);
	projectiles.add(this);
	this.scale.set(this.size, this.size);
}

Proj.prototype.update = function(farm, time) {
	if (this.isHoming) {
		var xDiff = player.x - this.position.x;
		var yDiff = player.y - this.position.y;
		this.distanceToPlayer = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
		this.angleToPlayer = Math.atan2(yDiff, xDiff); //+Math.PI/2; (use for protective plants)
	}

	//movement
	this.move();

	if(this.lifetime <= 0) {
		this.end();
	}
	this.lifetime -= game.time.elapsed/1000;

}

Proj.prototype.end = function() {
	this.destroy();
}


Proj.prototype.move = function() {

}

function hitMob(projectile, mob){
	mob.health -= projectile.damage;
	if(!projectile.isPiercing)
		projectile.kill();
}

function hitProj(projectileA, projectileB){
	console.log("womp");
	if(!projectileA.isPiercing)
		projectileA.kill();
	if(!projectileB.isPiercing)
		projectileB.kill();
}

function hitPlayer(player, projectile){
	console.log("hitPlayer :D");
	health -= projectile.damage;
	if (projectile.tag == "crow")
		game.sound.play('caw');
	if(!projectile.isPiercing)
		projectile.kill();
}


function cleanUp(group)
{
    var aCleanup = [];
    group.forEachDead(function(item){
        aCleanup.push(item);
    });
    
    var i = aCleanup.length - 1;
    while(i > -1)
    {
        var getitem = aCleanup[i];
        getitem.destroy();
        i--;
    }
}