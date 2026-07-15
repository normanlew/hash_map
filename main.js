import {HashMap} from "./hashmap.js";

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');

// console.log(test.entries());
// console.log(test.length());

test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test.length());
console.log(test.capacity);
console.log(test.entries());
test.set('frog', 'magenta');
test.set('hippo', 'big');
console.log(test.length());
console.log(test.capacity);
console.log(test.entries());
// console.log("keys: " + test.keys());
// console.log("values: " + test.values());
// console.log(test.length());
// console.log("get apple: " + test.get('apple'));
// console.log("get lion: " + test.get('lion'));
// console.log("get bat: " + test.get('bat'));
// console.log("has banana: " + test.has("banana"));
// console.log("has bat: " + test.has("bat"));
// console.log(test.capacity);
console.log("------------");
// console.log("remove apple: " + test.remove("apple"));
// console.log(test.entries());
// console.log("keys: " + test.keys());
// console.log("values: " + test.values());
// console.log("remove elephant: " + test.remove("elephant"));
// console.log(test.entries());
// console.log("remove mouse: " + test.remove("elephamousent"));
// console.log(test.entries());
// console.log("keys: " + test.keys());
// console.log("values: " + test.values());
// console.log(test.length());
// test.clear();
// console.log(test.entries());
// console.log("keys: " + test.keys());
// console.log("values: " + test.values());

