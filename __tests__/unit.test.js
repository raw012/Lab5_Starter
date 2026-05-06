// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber
test('valid phone number with dashes', () => {
    expect(isPhoneNumber('858-399-3999')).toBe(true);
});

test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(858)399-3999')).toBe(true);
});

test('invalid phone number too short', () => {
    expect(isPhoneNumber('123')).toBe(false);
});

test('invalid phone number letters', () => {
    expect(isPhoneNumber('abc')).toBe(false);
});
// isEmail
test('valid email', () => {
    expect(isEmail('test@gmail.com')).toBe(true);
});
test('valid email with underscore', () => {
    expect(isEmail('my_email@yahoo.com')).toBe(true);
});
test('invalid email no at sign', () => {
    expect(isEmail('testgmail.com')).toBe(false);
});
test('invalid email no domain', () => {
    expect(isEmail('test@')).toBe(false);
});

// isStrongPassword
test('valid strong password', () => {
    expect(isStrongPassword('Hello123')).toBe(true);
});
test('valid strong password with underscore', () => {
    expect(isStrongPassword('Abc_1234')).toBe(true);
});
test('invalid password starts with number', () => {
    expect(isStrongPassword('1Hello123')).toBe(false);
});
test('invalid password too short', () => {
    expect(isStrongPassword('Hi1')).toBe(false);
});

// isDate
test('valid date', () => {
    expect(isDate('12/25/2023')).toBe(true);
});
test('valid date single digit', () => {
    expect(isDate('1/1/2023')).toBe(true);
});
test('invalid date wrong format', () => {
    expect(isDate('2023-12-25')).toBe(false);
});
test('invalid date letters', () => {
    expect(isDate('ab/cd/efgh')).toBe(false);
});

// isHexColor
test('valid hex color 6 digits', () => {
    expect(isHexColor('#FF5733')).toBe(true);
});
test('valid hex color 3 digits', () => {
    expect(isHexColor('#FFF')).toBe(true);
});
test('invalid hex color wrong length', () => {
    expect(isHexColor('#FFFFF')).toBe(false);
});
test('invalid hex color invalid characters', () => {
    expect(isHexColor('#ZZZZZZ')).toBe(false);
});