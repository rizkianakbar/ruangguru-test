const magicMatrix = require('../code/magicMatrix');

const validInput = [
	[8, 1, 6],
	[3, 5, 7],
	[4, 9, 2],
];

const invalidInput = [
	[8, 1, 6],
	[3, 5, 2],
	[4, 9, 2],
];

test('should return true', () => {
    expect(magicMatrix(validInput)).toBe(true);
})

test('should return false', () => {
    expect(magicMatrix(invalidInput)).toBe(false);
})
