import React from 'react';
import {render, cleanup, fireEvent, waitFor, waitForElement} from '@testing-library/react';
import Counter2 from './Counter2Async.js';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Test async operations', () => {

    it('should increment after 1 sec', async () => {
        const { getByTestId, getByText } = render(<Counter2/>);

        fireEvent.click(getByTestId('button-up'));
        
        //await waitForElement(() => getByText('1'));//waitForElement deprecated
        const counter = await waitFor(() => getByText('1'));
        expect(counter).toHaveTextContent('1');
    });

});
