// Constructor function
function Animal(noise) {
    this.noise = noise;
}

Animal.prototype.noise = function() {
    return this.noise;
}

function Dog(noise) {
    Animal.call(this, noise);
}

Dog.prototype = new Animal();