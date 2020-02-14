function Cat() {
	this.stomatch = [];
}

function Mouse(name) {
	// body...
	this.name = name;
}

Cat.prototype.eat = function(mouse) {
	this.stomatch.push(mouse);
};

var Tom = new Cat();
var Jery = new Mouse('Jery');
Tom.eat(Jery);
console.log(Tom);