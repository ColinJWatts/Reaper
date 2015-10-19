Player.prototype = Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

//Player.prototype.force = {x:0.0, y:0.0}; 

var cursors;
var currentItem;
var direction;
var currField;
var inventory = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var invSlot = 1;
var money = 15;
var health = 100;
Player.prototype.moveSpeed = 150;

function Player(game, field, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'player');
	this.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(this);
	
	inventoryUI = game.add.text(game.camera.width/2 - 110 + game.camera.x, game.camera.height - 30 + game.camera.y, '0     0     0     0     0     0     0     0     0     0', { font: '12px Arial', fill: '#fff' });
	currentItemUI = game.add.text(game.camera.width/2 - 110 + game.camera.x, game.camera.height - 30 + game.camera.y, '0', { font: '12px Arial', fill: '#f00' });
	buttons = game.add.group();
	
	moneyLabel = game.add.text(game.camera.x + 20, game.camera.y + 20, '$' + money, { font: '14px Arial', fill: '#0f0' });
	healthBar = game.add.text(game.camera.x + 20, game.camera.y + 50, health + '/100', { font: '14px Arial', fill: '#0af' });
	buildInventory(inventory);

	//currField = garden;

    this.position.x = x;
    this.position.y = y;

    cursors = {
    up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
    down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
    left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
    right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),

    w: game.input.keyboard.addKey(Phaser.Keyboard.W),
    s: game.input.keyboard.addKey(Phaser.Keyboard.S),
    a: game.input.keyboard.addKey(Phaser.Keyboard.A),
    d: game.input.keyboard.addKey(Phaser.Keyboard.D),

    k0: game.input.keyboard.addKey(Phaser.Keyboard.ZERO),
    k1: game.input.keyboard.addKey(Phaser.Keyboard.ONE),
    k2: game.input.keyboard.addKey(Phaser.Keyboard.TWO),
    k3: game.input.keyboard.addKey(Phaser.Keyboard.THREE),
    k4: game.input.keyboard.addKey(Phaser.Keyboard.FOUR),
    k5: game.input.keyboard.addKey(Phaser.Keyboard.FIVE),
    k6: game.input.keyboard.addKey(Phaser.Keyboard.SIX),
    k7: game.input.keyboard.addKey(Phaser.Keyboard.SEVEN),
    k8: game.input.keyboard.addKey(Phaser.Keyboard.EIGHT),
    k9: game.input.keyboard.addKey(Phaser.Keyboard.NINE),
    };

    game.add.existing(this);
}

Player.prototype.update = function() {
	movePlayer();
	checkUsedItem();
	buildInventory(inventory);
	this.rotation = Math.atan2(this.y - game.input.mousePointer.y - game.camera.y, this.x - game.input.mousePointer.x - game.camera.x) - Math.PI/2;
//	checkField();
}

function buildInventory(i){
	//rewrites money and health labels as well
	healthBar.destroy();
	healthBar = game.add.text(game.camera.x + 20, game.camera.y + 50, health + '/100', { font: '14px Arial', fill: '#0af' });
	moneyLabel.destroy();
	moneyLabel = game.add.text(game.camera.x + 20, game.camera.y + 20, '$' + money, { font: '14px Arial', fill: '#0f0' });
	//1st row of inventory is the identifier (e.g a 1 is a shovel, etc.)
    //2nd row is how many of the item the player has
    inventoryUI.destroy();
    currentItemUI.destroy();
    buttons.removeAll();
    //Goddamn 0 case
    if(i[0][0] == 1){
		var invButton1 = game.add.image(game.camera.width/2 - 140 + 265 + game.camera.x, game.camera.height - 60 + game.camera.y, 'scythe');
		invButton1.scale.setTo(.4,.4);
		buttons.add(invButton1);
	}
	if(i[0][0] == 2){
		var invButton2 = game.add.image(game.camera.width/2 - 140 + 265 + game.camera.x, game.camera.height - 60 + game.camera.y, 'cornPlant');
		invButton2.scale.setTo(.4,.4);
		buttons.add(invButton2);
	}
	if(i[0][j] == 3){
		var invButton3 = game.add.image(game.camera.width/2 - 140 + 265 + game.camera.x, game.camera.height - 60 + game.camera.y, 'pumpkinPlant');
		invButton3.scale.setTo(.4,.4);
		buttons.add(invButton3);
	}
	if(i[0][j] == 4){
		var invButton4 = game.add.image(game.camera.width/2 - 140 + 265 + game.camera.x, game.camera.height - 60 + game.camera.y, 'scythe');
		buttons.add(invButton3);
	}
    for(var j = 1;j<10;j++){
		if(i[0][j] == 1){
			var invButton1 = game.add.image(game.camera.width/2 - 140 + 26.5*j + game.camera.x, game.camera.height - 60 + game.camera.y, 'scythe');
			invButton1.scale.setTo(.4,.4);
			buttons.add(invButton1);
		}
		if(i[0][j] == 2){
			var invButton2 = game.add.image(game.camera.width/2 - 140 + 26.5*j + game.camera.x, game.camera.height - 60 + game.camera.y, 'cornPlant');
			invButton2.scale.setTo(.4,.4);
			buttons.add(invButton2);
		}
		if(i[0][j] == 3){
			var invButton3 = game.add.image(game.camera.width/2 - 140 + 26.5*j + game.camera.x, game.camera.height - 60 + game.camera.y, 'pumpkinPlant');
			invButton3.scale.setTo(.4,.4);
			buttons.add(invButton3);
		}
		if(i[0][j] == 4){
			var invButton4 = game.add.image(game.camera.width/2 - 140 + 26.5*j + game.camera.x, game.camera.height - 60 + game.camera.y, 'scythe');
			invButton4.scale.setTo(.4,.4);
			buttons.add(invButton4);
		}
	}
	var inventoryText = i[1][1]+'      '+i[1][2]+'      '+i[1][3]+'      '+i[1][4]+'      '+i[1][5]+'      '+i[1][6]+'      '+i[1][7]+'      '+i[1][8]+'      '+i[1][9]+'      '+i[1][0];
    inventoryUI = game.add.text(game.camera.width/2 - 110 + game.camera.x, game.camera.height - 30 + game.camera.y, inventoryText, { font: '12px Arial', fill: '#fff' });
    var highlight = "";
    var upperBound = invSlot;
    if (upperBound == 0) upperBound = 10;
    for (var k = 1;k<upperBound;k++){
		highlight = highlight + "        ";
	}
	highlight = highlight + i[1][invSlot];
	currentItemUI = game.add.text(game.camera.width/2 - 110 + game.camera.x, game.camera.height - 30 + game.camera.y, highlight, { font: '12px Arial', fill: '#ff0' });
}

function movePlayer() {
	// controls player movement
	testV = 0;
	testH = 0;
	//direction: right=0,up=1,left=2,down=3
	if ((cursors.left.isDown || cursors.a.isDown) && player.position.x >= 32) {
		player.body.velocity.x = -player.moveSpeed;
		direction = 2;
		testH = 1;
	}
	if ((cursors.right.isDown || cursors.d.isDown)){
		player.body.velocity.x  = player.moveSpeed;
		direction = 0;
		testH = 1;
	}
	if ((cursors.up.isDown || cursors.w.isDown) && player.position.y >= 32){
		player.body.velocity.y  = -player.moveSpeed;
		direction = 1;
		testV = 1;
	}
	if ((cursors.down.isDown || cursors.s.isDown)) {
		player.body.velocity.y  = player.moveSpeed;
		direction = 3;
		testV = 1;
	}
	if (testH == 0) {
		player.body.velocity.x = 0;
	}
	if (testV == 0) {
		player.body.velocity.y = 0;
	}
}

function checkUsedItem(){
	//checks if the player is using an item at any given moment
	if(cursors.k0.justPressed(1)) {
		currentItem = inventory[0][0];
		invSlot = 0;
	}
	if(cursors.k1.justPressed(1)) {
		currentItem = inventory[0][1];
		invSlot = 1;
	}
	if(cursors.k2.justPressed(1)) {
		currentItem = inventory[0][2];
		invSlot = 2;
	}
	if(cursors.k3.justPressed(1)) {
		currentItem = inventory[0][3];
		invSlot = 3;
	}
	if(cursors.k4.justPressed(1)) {
		currentItem = inventory[0][4];
		invSlot = 4;
	}
	if(cursors.k5.justPressed(1)) {
		currentItem = inventory[0][5];
		invSlot = 5;
	}
	if(cursors.k6.justPressed(1)) {
		currentItem = inventory[0][6];
		invSlot = 6;
	}
	if(cursors.k7.justPressed(1)) {
		currentItem = inventory[0][7];
		invSlot = 7;
	}
	if(cursors.k8.justPressed(1)) {
		currentItem = inventory[0][8];
		invSlot = 8;
	}
	if(cursors.k9.justPressed(1)) {
		currentItem = inventory[0][9];
		invSlot = 9;
	}

	if(game.input.activePointer.isDown) { //Try to make 1 plant/click but not a priority
		console.log("using item");
		useItem(currentItem, invSlot);
		buildInventory(inventory);
	}
}

function movecamera(){
	game.camera.x = player.body.x-game.width/2 - 50*Math.tanh((player.body.x-game.camera.x-game.width/2)/50);
	game.camera.y = player.body.y-game.height/2 - 50*Math.tanh((player.body.y-game.camera.y-game.height/2)/50);
		if(player.position.x >= game.world.width){
			console.log("entered garden");
			this.game.state.start('gardenstate');
		}

}

/*
function checkField(){
	//console.log("player x: %d, player y: %d", player.position.x, player.position.y);
	if(currField == garden && player.position.x <= 0){
		console.log("entered town");
		currField = town;
		this.x = game.world.width-1;
		mobs.removeAll(true);
	}
	else if(currField == town && player.position.x >= game.world.width){
		console.log("entered garden");
		currField = garden;
		this.x = 1;
	}
}
*/