'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
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
  return typeof input === 'string';
};


/**
 * Is the input a type of array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return typeof input === 'string';
};


/**
 * Is the input a type of Object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'string';
};

/**
 * Is the input a type of function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'string';
};

/**
 * Type checking for a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'string';
};
