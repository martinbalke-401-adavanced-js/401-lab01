'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input - Must be a non empty Object
 * @param rules - Can either be a type to check against or an object property
 * @returns {boolean}
 */

validator.isValidObject = (input, rules) => {

  if (!input || Object.keys(input).length === 0 || typeof input !== 'object') return 'Please use a non empty object as an input';
  if (!rules) return 'Please provide the validator with a rule';
};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input - Must be a non empty Array
 * @param rules - Can either be a type check IE ('string') or another array to validate against
 * @returns {boolean}
 */
validator.isValidArray = (input, rules) => {
  //Input validation
  if (!input || input.length === 0 || !Array.isArray(input)) return 'Please use a non empty array as an input';
  if (!rules) return 'Please Provide a rule for validation';
  //Validates the type of all elements in an array matches the provided rule
  if (typeof rules === 'string') return input.every( (value) => typeof value === rules );
  //Checks the array against another array to see if the given rule is included.
  if (Array.isArray(rules)) return rules.every( (value) => input.includes(value) );
  return false;
};


/**
 * isString checks the given input to see if it is type of string?
 * @param input - Can be any input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};



/**
 * Is the input a number?
 * @param input 
 * @returns {boolean}
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};


/**
 * Is the input a type of array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return Array.isArray(input);
};


/**
 * Is the input a type of Object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is the input a type of function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * Type checking for a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};
