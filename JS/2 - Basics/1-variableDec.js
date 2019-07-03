// Ex 1 - Oops
function whoops() {
    var i = 0;
}
console.log(i);









































// Ex 2 - Scope
var i = 0;
if (true) {
    var i = 1;
}
console.log(i);

























// Ex 3 - Old school var
var x = 'outside';
function foo() {
    var x = 'inside';
    console.log(x);
}
foo();
console.log(x);




























// Ex 4 - without var
var y = 'outside';
function bar() {
    y = 'inside';
    console.log(y);
}
bar();
console.log(y);
























// Ex 5 - let
let t = 0;
if (true) {
    let t = 1;
}
console.log(t);






















// Ex 6 - const
const j = 0;
j = 3;






















// Ex 7
const m;



















// Ex 8 
if (true) {
    const r = 0;
}
console.log(r);

























// Ex 9 - Array Mutation
const a = [1];
const b = a;
console.log(a === b); // true
b.push(2);
console.log(a === b); // true
console.log(a);

























// Ex 10 - Obj Mutation
const obj = {};
obj.i = 1;
console.log(obj);





























// Hoisting

// Ex 1 
console.log(j); // ReferenceError: j is not defined
console.log(i); // undefined
var i = 0;


































// interpreter executes
var i;
console.log(i);
i = 0;




























// Hoisting bug
function isEqualTo7(n) {
    return !(n - seven);
    var seven = 7;
}
console.log(isEqualTo7(3)); // true
// !(3 - undefined) === !(NaN) === true
