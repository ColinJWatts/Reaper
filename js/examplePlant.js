examplePlant.prototype = Object.create(plant.prototype);

examplePlant.prototype.spread(age, farm){
	if(!farm.check(examplePlant, this.farmX+1, this.farmY))
		farm.add(examplePlant, this.farmX+1, this.farmY, age)
	if(!farm.check(examplePlant, this.farmX, this.farmY+1))
		farm.add(examplePlant, this.farmX, this.farmY+1, age)
	if(!farm.check(examplePlant, this.farmX-1, this.farmY))
		farm.add(examplePlant, this.farmX-1, this.farmY, age)
	if(!farm.check(examplePlant, this.farmX, this.farmY-1))
		farm.add(examplePlant, this.farmX, this.farmY-1, age)
}