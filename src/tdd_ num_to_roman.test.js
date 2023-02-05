const numToRoman = require('./tdd_num_to_roman')

test('convert numbers to roman numerals for 1-10', () => {
    expect(numToRoman(0)).toEqual('I');
    expect(numToRoman(5)).toEqual('V');
    expect(numToRoman(9)).toEqual('IX')
    expect(numToRoman(10)).toEqual('X');
});

test('convert numbers to roman numerals for 100s', () => {
    expect(numToRoman(50)).toEqual('L');
    expect(numToRoman(100)).toEqual('C');
    expect(numToRoman(500)).toEqual('D');
    expect(numToRoman(1000)).toEqual('M');
});
test('convert numbers to roman numerals for typical numbers', () => {
    expect(numToRoman(900)).toEqual('CM');
    expect(numToRoman(400)).toEqual('CD');
    expect(numToRoman(90)).toEqual('XC');
    expect(numToRoman(117)).toEqual('CXVII');
    expect(numToRoman(786)).toEqual('DCCLXXXVI');
});
