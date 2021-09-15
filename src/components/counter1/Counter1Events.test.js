import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Counter1 from './Counter1';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);


it('should increment counter', () => {
    const { getByTestId } = render(<Counter1/>);
    fireEvent.click(getByTestId('button-up'))
    expect(getByTestId('counter')).toHaveTextContent('1');
});

it('should decrement counter', () => {
    const { getByTestId } = render(<Counter1/>);
    fireEvent.click(getByTestId('button-down'));
    expect(getByTestId('counter')).toHaveTextContent('0');//because disabled!
});



// describe('test Landing Page', () => {

//     test('Fetch call should provide expected list of posts',  async () => {
//         axios.get.mockResolvedValueOnce({data: PostData});
//         render(
//             <LandingPage/>//calls useEffect, which calls Fetch, which calls api
//         )
//         await waitFor (() => expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/api/posts'));
//     }) 

//     test('if fetch call fails, should throw an error',  async () => {
//         axios.get.mockReturnValue(Promise.reject("something wrong"));
//         render(
//             <LandingPage/>
//         )
//         await waitFor (() => expect(expectedError()).toHaveBeenCalled());
//     }) 
// });