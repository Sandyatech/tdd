const romanToNum = require('./tdd_roman_to_num')

test('convert romans to numbers for 1-10', () => {
    expect(romanToNum('I')).toEqual(1);
    expect(romanToNum('V')).toEqual(5);
    expect(romanToNum('IX')).toEqual(9)
    expect(romanToNum('X')).toEqual(10);
});

test('convert romans to numbers for 100s', () => {
    expect(romanToNum('L')).toEqual(50);
    expect(romanToNum('C')).toEqual(100);
    expect(romanToNum('D')).toEqual(500);
    expect(romanToNum('M')).toEqual(1000);
});
test('convert romans to numbers for typical numbers', () => {
    expect(romanToNum('CM')).toEqual(900);
    expect(romanToNum('CD')).toEqual(400);
    expect(romanToNum('XC')).toEqual(90);
    expect(romanToNum('CXVII')).toEqual(117);
    expect(romanToNum('DCCLXXXVI')).toEqual(786);
});
