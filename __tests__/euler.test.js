import { Multiples, smallestMultiple } from './../src/euler.js';
import { Fibonacci } from './../src/euler.js';
import { Prime } from './../src/euler.js';
import { Palindrome } from './../src/euler.js';
import {smallesMultiple} from './../src/euler.js';

describe('Multiples', () => {

    test('should return sum of all the multiples of 3 or 5 up to 1000.', () => {
        expect(Multiples()).toBe(234168);
    });
});

describe('Fibonacci', () => {

    test('it should find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed four million.', () => {
        expect(Fibonacci()).toBe(4613732);
    });
});

describe('Prime', () => {

    test('it should return the largest prime factor of the number 13195', () => {
        expect(Prime(13195)).toBe(29);
    });
});

describe('Palindrome', () => {
    
    test('it should find the largest palindrome made from the product of two 2-digit numbers', () => {
    expect(Palindrome()).toBe('9009');
    });
});

describe('smallestMultiple', () => {

    test('it should the smallest positive number that is evenly divisible by all of the numbers from 1 to 20', () => {
        expect(smallestMultiple()).toBe(232792560);
    });
});
