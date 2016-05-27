/**
 * @function bmiClass
 * @param {float} [bmi = 0]
 * @returns {int}
 */

/*

  Weight classification based on BMI

  - Underweight: < 18.5
  - Normal weight: 18.5 - 24.9
  - Overweight: 25 - 29.9
  - Obese Class 1: 30 - 34.99
  - Obese Class 2: 35 - 39.99
  - Morbid Obese: >= 40

 */

import {
  UNDERWEIGHT,
  NORMAL,
  OVERWEIGHT,
  OBESE_1,
  OBESE_2,
  MORBID_OBESE
} from '../utils/constants'

export const bmiClass = function (bmi = 0) {
  if (bmi <= 18.5) {
    return UNDERWEIGHT
  } else if (bmi > 18.5 && bmi <= 24.99) {
    return NORMAL
  } else if (bmi > 24.99 && bmi <= 29.99) {
    return OVERWEIGHT
  } else if (bmi > 29.99 && bmi <= 34.99) {
    return OBESE_1
  } else if (bmi > 34.99 && bmi <= 39.99) {
    return OBESE_2
  } else if (bmi > 39.99) {
    return MORBID_OBESE
  }
}
