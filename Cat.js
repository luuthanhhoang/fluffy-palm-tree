function Cat() {
	this.stomatch = [];
}

var Mouse = require('Mouse');

Cat.prototype.eat = function(mouse) {
	this.stomatch.push(mouse);
};

var Tom = new Cat();
var Jery = new Mouse('Jery');
Tom.eat(Jery);
console.log(Tom);