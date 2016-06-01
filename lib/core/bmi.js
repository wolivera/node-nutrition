/**
 * @function bmi
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {boolean} [eng = false]
 * @returns {float}
 */

export const bmi = function (weight = 0, height = 1, eng = false) {
  /*
	 *	English BMI Formula:
	 *     BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
	 *  Metric BMI Formula:
	 *     BMI = ( Weight in Kilograms / ( Height in Centimeters x Height in Centimeters ) )
   */
  let result = weight / (height * height)
  if (eng) {
    result = result * 703
  }
  result = +result.toFixed(2)

  return result
}
