/**
 * @function bmi
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {int} [age = 0]
 * @param {boolean} [eng = false]
 * @param {boolean} [woman = true]
 * @returns {float}
 */

export const bmi = function (weight = 0, height = 1, age = 1, eng = false, woman = true) {
  /*
   *  English BMR Formula
   *   Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years )
   *   Men: BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
	 *
   *  Metric BMR Formula:
   *    Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years )
   *    Men: BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )
   */
  let result = 0
  if (eng && woman) {
    result = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
  } else if (eng && !woman) {
    result = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)
  } else if (!eng && woman) {
    result = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
  } else if (!eng && !woman) {
    result = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
  }
  result = +result.toFixed(2)

  return result
}
