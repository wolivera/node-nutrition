import * as nutrition from '../lib/'
import {expect} from 'chai'

describe('BMI Function', function () {
  it('should calculate BMI using common formula convention', function (done) {
    const opts = {
      weight: 65,
      height: 1.75
    }
    expect(nutrition.bmi(opts)).to.equal(21.22)
    done()
  })

  it('should calculate BMI using English formula convention', function (done) {
    const opts = {
      weight: 143,
      height: 69,
      eng: true
    }
    expect(nutrition.bmi(opts)).to.equal(21.12)
    done()
  })

  it('should work with undefined values', function (done) {
    expect(nutrition.bmi(undefined)).to.equal(0)
    done()
  })

  it('should work with different types', function (done) {
    expect(nutrition.bmi('')).to.equal(0)
    expect(nutrition.bmi({})).to.equal(0)
    done()
  })
})
