const myBoolean = true;

const myString = "hello world";

const firstNumber = 20;
console.log(firstNumber);

let secondNumbar = 40;
secondNumbar = 80;
console.log(secondNumbar);

const myArray = ['myBoolean','myString'];

// const sum=firstNumber+secondNumbar;
// console.log(sum);
const myObject = {firstProperty : myArray, sumProperty : firstNumber+secondNumbar}
console.log(myObject);
console.log(myObject.firstProperty);
console.log(myObject.sumProperty);

console.log(myObject.firstProperty[1]);