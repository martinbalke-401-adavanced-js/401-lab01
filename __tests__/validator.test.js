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
      typeof input === 'boolean' ? expect(validator.isBoolean(input)).toBeTruthy() :expect(validator.isBoolean(input)).toBeFalsy();
    });
  });
  

});

describe('validator module performs complex validations on Objects', () => {

  // const testObject = {
  //   name: 'Harry Potter',
  //   job: 'Wizard',
  //   pets: { name: 'Hedwig', species: 'owl' },
  //   friends: ['Hermoine', 'Ron'],
  //   parents: [],
  // };

  // it('validates all passed in parameters before proceeding', () => {
  //   expect(validator.isValidObject()).toBe('Please use a non empty object as an input');
  //   expect(validator.isValidObject({})).toBe('Please use a non empty object as an input');
  //   expect(validator.isValidObject('Hi')).toBe('Please use a non empty object as an input');
  //   expect(validator.isValidObject({name: 'bob'})).toBe('Please provide the validator with a rule');
  // });

  // it('validates the presence of required object properties at any level', () => {
  //   expect(validator.isValidObject({ name: 'bob' }, 'bob')).toBeTruthy();
  //   expect(validator.isValidObject(testObject, 'Hedwig')).toBeTruthy();
  //   expect(validator.isValidObject({ testObject }, 'parents')).toBeFalsy();
  // });

  // it('validates the proper types of object properties', () => {
  //   expect(validator.isValidObject(testObject.pets, 'object')).toBeTruthy();
  //   expect(validator.isValidObject(testObject.friends, 'array')).toBeTruthy();
  //   expect(validator.isValidObject(testObject.job, 'number')).toBeTruthy();

  // });



});
describe('validator module performs complex validations on Arrays', () => {

  it('validates all passed in parameters before proceeding', () => {

    expect(validator.isValidArray()).toBe('Please use a non empty array as an input');
    expect(validator.isValidArray([])).toBe('Please use a non empty array as an input');
    expect(validator.isValidArray({person: 'james'})).toBe('Please use a non empty array as an input');
    expect(validator.isValidArray(['1','2'])).toBe('Please Provide a rule for validation');
  });

  it('validates the types of values contained in an array', () => {
    expect(validator.isValidArray([1,2,3,4], 'string')).toBeFalsy();
    expect(validator.isValidArray([1,2,3,4], 'number')).toBeTruthy();
    expect(validator.isValidArray(['1',2,'3',4], 'string')).toBeFalsy();
    expect(validator.isValidArray(['the lazy brown cat', 'hello'], 'string')).toBeTruthy();
  });

  it('validates a value array against an approved list', () => {
    expect(validator.isValidArray([1, 2, 3, 4], [3,2,6])).toBeFalsy();
    expect(validator.isValidArray([1, 2, 3, 4], [4,3,2])).toBeTruthy();
    expect(validator.isValidArray(['the lazy brown cat', 'hello'], ['hello'])).toBeTruthy();

  });


});

