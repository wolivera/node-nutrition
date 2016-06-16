
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

BMI (Body Mass Index) is a measurement of body fat based on height and weight that applies to both men and women. It can be used to indicate if you are overweight, obese, underweight or normal. 

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

BMR (Basal Metabolic Rate) is the amount of energy expended while at rest in a neutrally temperate environment.

`opts` is an object with properties containing formula values

The following arguments are expected:

- **weight** : Weight in kilograms
- **height** : Height in meters
- **age** : Age in years
- **woman** : True if subject is a woman, False if men. (Default is true)



#### `dailyCalories(opts)`

This method also know as the Harris–Benedict equation is a method used to estimate individual's daily kilocalorie requirements based on a basal metabolic rate (BMR).

`opts` is an object with properties containing formula values

The following arguments are expected:

- **bmr** : Float obtained from bmr method
- **exerciseType** : Exercise frequency. Use one of the following options: 
	- 'No' if little to no exercise
	- 'Light' if light exercise (1-3 days per week)
	- 'Moderate' if medium exercise (3-5 days per week)
	- 'Heavy' if heavy exercise (6-7 days per week)
	- 'Full' if extra heavy exercise (twice per day)


## Next steps

+ Set of healthy methods
+ Coverage 

## Contributing

Please see [CONTRIBUTING](https://github.com/redblues/node-nutrition/blob/master/CONTRIBUTING.md).

## LICENSE

MIT, see [LICENSE](https://github.com/redblues/node-nutrition/blob/master/LICENSE).


