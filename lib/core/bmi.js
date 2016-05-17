/**
 * @function calculateBMI
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {boolean} [eng = false]
 * @returns {int}
 */
export function calculateBMI (weigth = 0, height = 1, eng = false) {
  /*
		English BMI Formula
		BMI = ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
		Metric BMI Formula
		BMI = ( Weight in Kilograms / ( Height in Meters x Height in Meters ) )
  */
  let result = weigth / (height * height)
  if (eng) {
    result = result * 703
  }
  result = Math.round(result)

  return result
}

/**
 * @function BMI
 * @alias calculateBMI
 */
export const BMI = calculateBMI
