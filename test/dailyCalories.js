import * as nutrition from '../lib/'
import {expect} from 'chai'
import {
  NO_EXERCISE,
  LIGHT_EXERCISE,
  MODERATE_EXERCISE,
  HEAVY_EXERCISE,
  EXTRA_HEAVY_EXERCISE
} from '../lib/utils/constants'

describe('Daily Calories Function', function () {
  it('should return daily calories for no exercise', function (done) {
    expect(nutrition.dailyCalories({ exerciseType: NO_EXERCISE, bmr: 5 })).to.equal(6)
    done()
  })

  it('should return daily calories for light exercise', function (done) {
    expect(nutrition.dailyCalories({ exerciseType: LIGHT_EXERCISE, bmr: 5 })).to.equal(6.875)
    done()
  })

  it('should return daily calories for moderate exercise', function (done) {
    expect(nutrition.dailyCalories({ exerciseType: MODERATE_EXERCISE, bmr: 5 })).to.equal(7.75)
    done()
  })

  it('should return daily calories for heavy exercise', function (done) {
    expect(nutrition.dailyCalories({ exerciseType: HEAVY_EXERCISE, bmr: 5 })).to.equal(8.625)
    done()
  })

  it('should return daily calories for extra heavy exercise', function (done) {
    expect(nutrition.dailyCalories({ exerciseType: EXTRA_HEAVY_EXERCISE, bmr: 5 })).to.equal(9.5)
    done()
  })

  it('should work with null and special values', function (done) {
    expect(nutrition.dailyCalories('')).to.equal(0)
    expect(nutrition.dailyCalories({})).to.equal(0)
    done()
  })
})
