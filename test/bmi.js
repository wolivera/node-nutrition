import nutrition from '../lib/';
import {expect} from 'chai';

describe('BMI Functions', function() {
  it('should calculate BMI using common formula convention', function (done) {

    expect(nutrition.getBMI(65, 1.75)).to.equal(21.2);

    done();
  });

  it('should calculate BMI using English formula convention', function (done) {

    const {bmi} = nutrition;

    expect(bmi.getBMI(143.3, 8.9, true)).to.equal(21.2);

    done();
  });
});