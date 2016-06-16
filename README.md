
[![Build Status](https://travis-ci.org/redblues/node-nutrition.svg?branch=master)](https://travis-ci.org/redblues/node-nutrition)

# Nutrition

Simple nutrition facts wrapper as an [NPM](https://www.npmjs.com/) module.

## Installation

	npm install nutrition --save
	
## Usage

```js
// import for ES6
import * as nutrition from 'nutrition'

const value  = nutrition.bmi(75, 1.75)


// OR import for ES5
var nutrition = require('nutrition')

var value  = nutrition.bmi(75, 1.75)

```

## Methods

#### `bmi(opts)`

BMI or Body Mass Index is ..

`opts` is an object with properties containing formula values

The following arguments are expected:

- **weight** : Subject weight (default is kilograms)
- **height** : Subject height (default is meters)
- **eng** : 
	- If true then **weight** is used in pounds, otherwise in kilograms.
	- If true then **height** is used in inches, otherwise in meters.

#### `bmiClass(bmi)`

Returns the class from Body Mass Index value. Possible results are:

- Underweight, Normal, Overweight, Obese Class 1, Obese Class 2, Morbid Obesity

#### `bmr(opts)`

BMR or Body Mass ..

`opts` is an object with properties containing formula values

The following arguments are expected:

- **weight** : Weight in kilograms
- **height** : Height in meters
- **age** : Age in years
- **woman** : True if subject is a woman, False if men. (Default is true)


## Next steps

+ Set of healthy methods
+ Coverage 

## Contributing

Please see [CONTRIBUTING](https://github.com/redblues/node-nutrition/blob/master/CONTRIBUTING.md).

## LICENSE

MIT, see [LICENSE](https://github.com/redblues/node-nutrition/blob/master/LICENSE).


