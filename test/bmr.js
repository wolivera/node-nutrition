import * as nutrition from '../lib/'
import {expect} from 'chai'

describe('BMR Function', function () {
  it('should calculate BMR for a woman', function (done) {
    const opts = {
      weight: 60,
      height: 1.70,
      age: 24,
      woman: true
    }
    expect(nutrition.bmr(opts)).to.equal(1382)
    done()
  })

  it('should calculate BMR for a men', function (done) {
    const opts = {
      weight: 60,
      height: 1.70,
      age: 24,
      woman: false
    }
    expect(nutrition.bmr(opts)).to.equal(1548)
    done()
  })

  it('should work with undefined values', function (done) {
    expect(nutrition.bmr(undefined)).to.equal(0)
    done()
  })

  it('should work with different types', function (done) {
    expect(nutrition.bmr('')).to.equal(0)
    expect(nutrition.bmr({})).to.equal(0)
    done()
  })
})
