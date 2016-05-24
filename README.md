
[![Build Status](https://travis-ci.org/redblues/node-nutrition.svg?branch=master)](https://travis-ci.org/redblues/node-nutrition)

# Nutrition

Simple nutrition facts wrapper as an [NPM](https://www.npmjs.com/) module.

## Installation

	npm install nutrition --save
	
## Usage

```js
// import a single function
import { f } from 'nutrition';

// or everything at once
import * as nutrition from 'nutrition';

const value  = nutrition.BMI(75, 1.75);
```

## Methods

#### `BMI(weight, height, eng)`

If eng (for English BMI style) is true then:

- **weight** is used in pounds, otherwise in kilograms.
- **height** is used in inches, otherwise in meters.



## Next steps

+ Set of healthy methods
+ Unit tests
+ CI tool
+ Coverage

## LICENSE

MIT, see [LICENSE](https://github.com/redblues/node-nutrition/blob/master/LICENSE).


