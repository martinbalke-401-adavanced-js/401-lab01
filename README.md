# LAB - 01

## Project Name 
401 Lab 01

### Author: Martin Balke

### Links and Resources
* [submission PR]https://github.com/martinbalke-401-adavanced-js/401-lab01/pull/2
* [travis]https://www.travis-ci.com/martinbalke-401-adavanced-js/401-lab01


### Modules
#### `validator.js`
##### Exported Values and Methods

###### `isValidObject({object}, rules) -> boolean`
Inputs are an Object and a string as rules for checking the provided object

###### `isValidArray([array], rules) -> boolean`
Inputs are an array and a string or array as rules. This method validates whether or not a given input is an array and then checks that array against a set of rules. If the rule input is a string then it uses that as a type check for the array. If the rule input is an array it checks to see if the array input includes the rules and returns a boolean.

###### `isString(input) -> boolean`
Tests a given input for whether or not it is of the type String

###### `isNumber(input) -> boolean`
Tests a given input for whether or not it is of the type Number

###### `isArray(input) -> boolean`
Tests a given input for whether or not it is of the type array

###### `isBoolean(input) -> boolean`
Tests a given input for whether or not it is of the type Boolean


#### Running the app
* `npm start`

  
#### Tests
* How do you run tests?
* `npm test`
* What assertions were made?
* What assertions need to be / should be made?
