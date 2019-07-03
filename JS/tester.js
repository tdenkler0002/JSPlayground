class Numbers {
    constructor(array) {
        this.array = array;
    }

    addNumber(number) {
        if (number !== undefined) {
            this.array.push(number);
        }
        return (number) => {
            console.log(this === numbersObject); // => true
            this.array.push(number);
        };
    }
}
var numbersObject = new Numbers([]);
numbersObject.addNumber(1);
var addMethod = numbersObject.addNumber();
addMethod(5);
console.log(numbersObject.array); // => [1, 5]

// w/o arrow function
 return function(number) {
     console.log(this === numbersObject) // => true
     this.array.push(number);
 }.bind(this);
 // OR
 let self = this;
 return function(number) {
     console.log(self === numbersObject); // => true
     self.array.push(number);
 }