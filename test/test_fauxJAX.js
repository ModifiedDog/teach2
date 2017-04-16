import {expect} from 'chai'

import fauxJAX from '../src/fauxJAX'

describe('deferred callbacks', function () {
    it('callback is passed same value', function (done) {
	fauxJAX(20, function (value) {
	    expect(value === 20).to.be.true
	    done()
	});
    });
});
