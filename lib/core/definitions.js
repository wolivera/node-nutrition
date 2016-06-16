/**
 * @function definitions
 * @param {string} [fName = 'BMI']
 */

import {
  BMR,
  BMI
} from '../utils/constants'

import {
  BMR_DEF,
  BMI_DEF
} from '../utils/definitions'

export const dailyCalories = function (fName = BMI) {
  if (fName === BMI) {
    return BMI_DEF
  } else if (fName === BMR) {
    return BMR_DEF
  }
}
