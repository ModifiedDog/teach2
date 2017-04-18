import {expect} from 'chai'

import {getFiles} from '../src/getFiles'

describe('getFiles', function () {
    it('calls callbacks in order passed', function (done) {
	var args = [1, 2, 3]
	var results = []
	getFiles(args, function (value) {
	    results.push(value)
	    if (results.length == args.length) {
		expect(results).to.eql(args)
		done()
	    }
	});
    });
});
