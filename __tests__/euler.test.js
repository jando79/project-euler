import { Multiples } from './../src/euler.js';

describe('Multiples', () => {

    test('should return sum of all the multiples of 3 or 5 up to 1000.', () => {
        expect(Multiples()).toBe(234168);
    });
});
