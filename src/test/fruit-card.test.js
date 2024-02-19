import React from 'react';
import {render, screen} from '@testing-library/react';
import FruitCard from '../components/fruit-card';
describe('Fruit Card', () => {

    it('should render correctly', () => {
        const fruit = {
            id: 1,
            name: 'Apple',
            family: 'Rosaceae',
            order: 'Rosids',
            genus: 'Malus',
            nutritions: {
                calories: 52,
                fat: 0.1,
                protein: 0.3,
                sugar: 10,
                carbohydrates: 10,
            },
        };
        const { asFragment } = render(<FruitCard fruit={fruit} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the correct information of a fruit', () => {
        const fruit = {
            id: 1,
            name: 'Apple',
            family: 'Rosaceae',
            order: 'Rosids',
            genus: 'Malus',
            nutritions: {
                calories: 52,
                fat: 0.1,
                protein: 0.3,
                sugar: 10,
                carbohydrates: 10,
            },
        };
        render(<FruitCard fruit={fruit} />);
        
        // Checking if all elements are displayed on the page   
    expect(screen.queryByText(/Apple/i)).not.toBeNull();
    expect(screen.queryByText(/Rosaceae/i)).not.toBeNull();
    });
});