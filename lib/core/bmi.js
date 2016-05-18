/**
 * @function getBMI
 * @param {float} [weight = 0]
 * @param {float} [height = 0]
 * @param {boolean} [eng = false]
 * @returns {int}
 */
export default function getBMI (weigth = 0, height = 1, eng = false) {
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
  result = +result.toFixed(1)

  return result
}

//TODO Improve getBMI to receive hash with opts
//TODO Methods for bmi ranges
