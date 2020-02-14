function Dog() {
	this.stomatch = [];
	this.name = 'Mick'
}

Dog.prototype.eat = function(cat) {
	this.stomatch.push(cat);
};

