/**
 * @function bmr
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {int} [age = 0]
 * @param {boolean} [eng = false]
 * @param {boolean} [woman = true]
 * @returns {float}
 */

/*
 *  Men  BMR = (10 x weight in kg) + (625 × height in m) - (5 × age in years) + 5
 *  Women BMR = (10 x weight in kg) + (625 × height in m) - (5 × age in years) - 161
 */

export const bmr = function ({ weight = null, height = 1, age = 1, woman = true } = {}) {
  if (typeof weight !== 'number' || typeof height !== 'number' || typeof age !== 'number' || typeof woman !== 'boolean') {
    return 0
  }
  let result = 0
  if (woman) {
    result = (10 * weight) + (625 * height) - (5 * age) - 161
  } else if (!woman) {
    result = (10 * weight) + (625 * height) - (5 * age) + 5
  }
  result = result > 0 ? +result.toFixed(0) : 0

  return result
}
