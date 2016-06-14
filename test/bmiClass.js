import * as nutrition from '../lib/'
import {expect} from 'chai'
import {
  UNDERWEIGHT,
  NORMAL,
  OVERWEIGHT,
  OBESE_1,
  OBESE_2,
  MORBID_OBESE
} from '../lib/utils/constants'

describe('BMI Class Function', function () {
  it('should return Underweight class', function (done) {
    expect(nutrition.bmiClass(0)).to.equal(UNDERWEIGHT)
    expect(nutrition.bmiClass(18.5)).to.equal(UNDERWEIGHT)
    done()
  })

  it('should return Normal class', function (done) {
    expect(nutrition.bmiClass(18.51)).to.equal(NORMAL)
    expect(nutrition.bmiClass(24.99)).to.equal(NORMAL)
    done()
  })

  it('should return Overweight class', function (done) {
    expect(nutrition.bmiClass(24.991)).to.equal(OVERWEIGHT)
    expect(nutrition.bmiClass(29.99)).to.equal(OVERWEIGHT)
    done()
  })

  it('should return Obese 1 class', function (done) {
    expect(nutrition.bmiClass(29.991)).to.equal(OBESE_1)
    expect(nutrition.bmiClass(34.99)).to.equal(OBESE_1)
    done()
  })

  it('should return Obese 2 class', function (done) {
    expect(nutrition.bmiClass(34.991)).to.equal(OBESE_2)
    expect(nutrition.bmiClass(39.99)).to.equal(OBESE_2)
    done()
  })

  it('should return Morbid Obese class', function (done) {
    expect(nutrition.bmiClass(39.991)).to.equal(MORBID_OBESE)
    expect(nutrition.bmiClass(1000)).to.equal(MORBID_OBESE)
    done()
  })

  it('should work with null and special values', function (done) {
    expect(nutrition.bmiClass(null)).to.equal(UNDERWEIGHT)
    expect(nutrition.bmiClass(undefined)).to.equal(UNDERWEIGHT)
    expect(nutrition.bmiClass()).to.equal(UNDERWEIGHT)
    expect(nutrition.bmiClass(4)).to.equal(UNDERWEIGHT)
    expect(nutrition.bmiClass({})).to.equal(UNDERWEIGHT)
    done()
  })
})
