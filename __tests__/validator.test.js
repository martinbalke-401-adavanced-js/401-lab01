'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {


  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;
  let testingArray = [str,num,arr,obj,func,bool];

  //Testing for String
  testingArray.forEach( (input) => {
    it('Checks the type of an input for string', () => {
      typeof input === 'string' ? expect(validator.isString(input)).toBeTruthy() :expect(validator.isString(input)).toBeFalsy();
    });
  });

  //Testing for Number
  testingArray.forEach( (input) => {
    it('Checks the type of an input for string', () => {
      typeof input === 'number' ? expect(validator.isNumber(input)).toBeTruthy() :expect(validator.isNumber(input)).toBeFalsy();
    });
  });

  //Testing for Array
  testingArray.forEach( (input) => {
    it('Checks the type of an input for array', () => {
      Array.isArray(input) ? expect(validator.isArray(input)).toBeTruthy() :expect(validator.isArray(input)).toBeFalsy();
    });
  });

  //Testing for Object
  testingArray.forEach( (input) => {
    it('Checks the type of an input for object', () => {
      typeof input === 'object' ? expect(validator.isObject(input)).toBeTruthy() :expect(validator.isObject(input)).toBeFalsy();
    });

  });

  //Testing for Function
  testingArray.forEach( (input) => {
    it('Checks the type of an input for function', () => {
      typeof input === 'function' ? expect(validator.isFunction(input)).toBeTruthy() :expect(validator.isFunction(input)).toBeFalsy();
    });
  });

  //Testing for Boolean
  testingArray.forEach( (input) => {
    it('Checks the type of an input for boolean', () => {
      typeof input === 'boolean' ? expect(validator.isTruthy(input)).toBeTruthy() :expect(validator.isTruthy(input)).toBeFalsy();
    });
  });
  

});

// describe('validator module performs complex validations', () => {

//   it('validates the presence of required object properties at any level', () => {
//     // i.e. does person.hair.color exist and have a good value, not just person.hair
//     expect(true).toBeFalsy();
//   });

//   it('validates the proper types of object properties', () => {
//     // i.e. person.name must be a string, etc.
//     expect(true).toBeFalsy();
//   });

//   it('validates the types of values contained in an array', () => {
//     // i.e. an array of all strings or numbers
//     expect(true).toBeFalsy();
//   });

//   it('validates a value array against an approved list', () => {
//     // i.e. a string might only be allowed to be "yes" or "no"
//     expect(true).toBeFalsy();
//   });

//   // TODO: Cover so, so many more cases

// });

