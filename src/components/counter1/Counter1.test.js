import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Counter1 from './Counter1';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Counter 1 tests', () => {

    it('should equal 0', () => {
        const { getByTestId } = render(<Counter1/>);
        expect(getByTestId('counter')).toHaveTextContent(0);
    });

    it('up button should be enabled', () => {
        const { getByTestId } = render(<Counter1/>);
        expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
    });

    it('down button should be disabled', () => {
        const { getByTestId } = render(<Counter1/>);
        expect(getByTestId('button-down')).toBeDisabled();
    });
});
