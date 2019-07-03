// OG Way
var sweetFunction = function() {
    console.log("Hi! I am a function.");
}

radFunction(sweetFunction);
sweetFunction.property = '1';   

// Set as Const
const constFunction = () => console.log('Howdy!');
// constFunction  // () => console.log('Howdy!;);
constFunction(); // 'Howdy!'

// Functional patterns
var a = [1, 2, 3];
a.forEach(function(element) {
    console.log(element);
});

var b = [1, 2, 3];
b.forEach(element => {
    console.log(e);
});