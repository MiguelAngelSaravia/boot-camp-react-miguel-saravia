import React from 'react';
describe('custom value', () => {
    it('sums 2 values', () => {
        const num1 = 10
        const num2 = 10

        const result  = num1 + num2;
        expect(result).toBe(20);
    })
});
