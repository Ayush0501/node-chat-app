const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var string = 123;
		var value = isRealString(string);

		expect(value).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var string = '      ';
		var value = isRealString(string);

		expect(value).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		var string = 'sjbdfisb';
		var value = isRealString(string);

		expect(value).toBe(true);
	});
});