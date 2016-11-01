'use strict'
const Class1 = require("./classes/Class1");

const obj1 = new Class1(5);
console.log(`Object property = ${obj1.val}`);
obj1.pubMethod(28);
