/**
 * @function bmi
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {boolean} [eng = false]
 * @returns {float}
 */

/*
 *  English BMI Formula:
 *     BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
 *  Metric BMI Formula:
 *     BMI = ( Weight in Kilograms / ( Height in meters x Height in meters ) )
 */

export const bmi = function ({ weight = 0, height = 1, eng = false } = {}) {
  if (typeof weight !== 'number' || typeof height !== 'number' || typeof eng !== 'boolean') {
    return 0
  }
  let result = weight / (height * height)
  if (eng) {
    result = result * 703
  }
  result = result > 0 ? +result.toFixed(2) : 0

  return result
}
