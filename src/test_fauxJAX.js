'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _fauxJAX = require('../src/fauxJAX');

var _fauxJAX2 = _interopRequireDefault(_fauxJAX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('deferred callbacks', function () {
				it('callback is passed same value', function (done) {
								(0, _fauxJAX2.default)(20, function (value) {
												(0, _chai2.default)(value === 20).to.be.true;
												done();
								});
				});
});