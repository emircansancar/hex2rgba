const hex2RGBA = require('./index');

test('#FFF, ".3" (string) to rgba(255, 255, 255, .3)', () => {
  expect(hex2RGBA('#FFF', '.3')).toBe('rgba(255, 255, 255, .3)');
});

test('#FFFFFF, 1 (integer) to rgba(255, 255, 255, 1)', () => {
  expect(hex2RGBA('#FFF', 1)).toBe('rgba(255, 255, 255, 1)');
});

test('FFF, ".5" (string) to rgba(255, 255, 255, .5)', () => {
  expect(hex2RGBA('FFF', '.5')).toBe('rgba(255, 255, 255, .5)');
});

test('FFFFFF, 1 (integer) to rgba(255, 255, 255, 1)', () => {
  expect(hex2RGBA('FFF', 1)).toBe('rgba(255, 255, 255, 1)');
});

test('FFFFF, 1 (integer) to throw Error "invalid hex value"', () => {
  expect(() => { hex2RGBA('FFFFF', 1); }).toThrow('invalid hex value');
});

//extras
test('#FFF, .3 (number) to rgba(255, 255, 255, .3)', () => {
  expect(hex2RGBA('#FFF', .3)).toBe('rgba(255, 255, 255, .3)');
});

test('#FFF, 0.3 (number) to rgba(255, 255, 255, .3)', () => {
  expect(hex2RGBA('#FFF', 0.3)).toBe('rgba(255, 255, 255, .3)');
});

test('#FFF, "1" (string) to rgba(255, 255, 255, 1)', () => {
  expect(hex2RGBA('#FFF', '1')).toBe('rgba(255, 255, 255, 1)');
});

test('#FFF, "11" (string) to throw Error "invalid alpha value"', () => {
  expect(() => { hex2RGBA('#FFF', '11'); }).toThrow();
});

test('#FFF, "xxx" (string) to throw Error "invalid alpha value"', () => {
  expect(() => { hex2RGBA('#FFF', 'xxx'); }).toThrow();
});