
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

#### `bmi(weight, height, eng)`

If eng (for English BMI style) is true then:

- **weight** is used in pounds, otherwise in kilograms.
- **height** is used in inches, otherwise in meters.



## Next steps

+ Set of healthy methods
+ Coverage

## LICENSE

MIT, see [LICENSE](https://github.com/redblues/node-nutrition/blob/master/LICENSE).


