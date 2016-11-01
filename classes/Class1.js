'use strict'

const internal = {};

module.exports = internal.Class1 = class {
  constructor(arg){
    console.log('Initialize Class1 object');
    this.val = arg;
  }
  pubMethod(x){
    console.log(`Public method with the help of private got this value: ${_method(x)}`);
  }
}

let _val = 12;

function _method(x){
  return _val * x;
}
