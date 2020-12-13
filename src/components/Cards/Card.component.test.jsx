import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import {CustomCard} from './Card.component';
describe('CustomCard', () => {
    it('sums 2 values', () => {
        const num1 = 10
        const num2 = 10

        const result  = num1 + num2;
        expect(result).toBe(20);
    })
});
