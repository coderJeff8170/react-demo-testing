import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TestRouter from './Router1.js';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import "@testing-library/jest-dom/extend-expect";

//helper function to wrap test route component with Router component
const renderWithRouter = (component) => {
    const history = createMemoryHistory();
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
}

it('should render the home page', () => {
    //assigns the role of container to the testrouter component
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);
    const navbar = getByTestId('navbar');
    const homeLink = getByTestId('home-link');

    //checks testrouter container for text that matches string
    expect(container.innerHTML).toMatch('Home page');
    expect(navbar).toContainElement(homeLink);
});

it('should navigate to the about page', () => {
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);

    fireEvent.click(getByTestId('about-link'));

    //checks whole container
    expect(container.innerHTML).toContain('About page');
});

it('should navigate to contact page with correct param', () => {
    const { getByTestId, container } = renderWithRouter(<TestRouter/>);

    //must supply node to click so that the routing can be tested.
    fireEvent.click(getByTestId('contact-link'));
    
    //checks whole container
    expect(container.innerHTML).toMatch('Pookie Andrews');
});