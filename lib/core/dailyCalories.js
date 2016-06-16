/**
 * @function dailyCalories
 * @param {float} [bmr = 0]
 * @returns {float}
 */

/*
 * Little to no exercise					Daily kilocalories needed = BMR x 1.2
 * Light exercise (1–3 days per week)		Daily kilocalories needed = BMR x 1.375
 * Moderate exercise (3–5 days per week)	Daily kilocalories needed = BMR x 1.55
 * Heavy exercise (6–7 days per week)		Daily kilocalories needed = BMR x 1.725
 * Very heavy exercise						Daily kilocalories needed = BMR x 1.9
 */

import {
  NO_EXERCISE,
  LIGHT_EXERCISE,
  MODERATE_EXERCISE,
  HEAVY_EXERCISE,
  EXTRA_HEAVY_EXERCISE
} from '../utils/constants'

export const dailyCalories = function ({ exerciseType = NO_EXERCISE, bmr = 0 }) {
  let result = 0
  if (exerciseType === NO_EXERCISE) {
    result = bmr * 1.2
  } else if (exerciseType === LIGHT_EXERCISE) {
    result = bmr * 1.375
  } else if (exerciseType === MODERATE_EXERCISE) {
    result = bmr * 1.55
  } else if (exerciseType === HEAVY_EXERCISE) {
    result = bmr * 1.725
  } else if (exerciseType === EXTRA_HEAVY_EXERCISE) {
    result = bmr * 1.9
  }
  result = +result.toFixed(3)
  return result
}
