// 2 Function Declaration
function isEven(num) {
    return num % 2 === 0;
}
isEven(24); // => true
isEven(11); // => false

function sum(a, b) {
    return a + b;
}
console.log(([3 ,7]).reduce(sum));


// 3 Function Expression
let isTruthy = function(value) {
    return !!value;
}

let nums = ([1, false, 5]).filter(function(item) {
    return typeof item === 'number';
});

// IIFE
(function msgFunction(message) {
    return message + ' World!';
})('Hello');


// Conditionals
(function() {
    'use strict';
    if(true) {
        function wontWork() {
            return 'true wontWork'
        }
        ok = function() {
            return 'true ok'
        }
    } else {
        function wontWork() {
            return 'false wontWork'
        }
        ok = function() {
            return 'false ok'
        }
    }
})

let methods = {
    nums: [1, 2],
    sum: function() { 'stuff here!' }
}

// Anonymous function
let getType = function(variable) {
    return typeof variable;
}
// Named function
let getType = function funName(variable) { }
getType.name // => funName

// 4 Shorthand method definition

let collection = {
    items: [],
    add(...items) {
        this.items.push(...items);
    }
}
collection.add('A', 'B');

// computed properties
let collection = {
    items: [],
    [addMethod](...items) {
        this.items.push(...items);
    }
}
collection[addMethod]('A', 'B');

// arrow function
let absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}
absValue(-10); // => 10

// Context

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
let numbersObject = new Numbers([]);
numbersObject.addNumber(1);
let addMethod = numbersObject.addNumber();
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

// short callbacks
let numbers = [2, 4, 6, 8];
numbers.some(item => item === 6);


// 6 Generator function
// function declaration
 function* indexGenerator(){
     var index = 0;
     while(true) {
         yield index++;
     }
 }

 let g = indexGenerator();
 console.log(g.next().value); // => 0
 console.log(g.next().value); // => 1
 
// function expression
let indexGenerator = function* () {
    let index = 0;
    while(true) {
        yield index++;
    }
};

//shorthand method definition
var obj = {
    *indexGenerator() {
        var index = 0;
        while(true) {
            yield index++;
        }
    }
}

// 7 new Function
let numberA = 'numberA', numberB = 'numberB';
let sumFunction = new Function(numberA, numberB,
    'return numberA + numberB'
);
sumFunction(10, 15); // => 25