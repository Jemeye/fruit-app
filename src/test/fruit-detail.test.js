import React from 'react';
import {render, screen} from '@testing-library/react';
import FruitDetail from '../components/fruit-detail';
describe('Fruit Detail', () => {

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
        const { asFragment } = render(<FruitDetail fruit={fruit} isOpen={true} onClose={() => {}} />);
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
                carbohydrates: 11,
            },
        };
        render(<FruitDetail fruit={fruit} isOpen={true} onClose={() => {}}/>);
        
        // Checking if all elements are displayed on the page   
    expect(screen.queryByText(/Apple/i)).not.toBeNull();
    expect(screen.queryByText(/Rosaceae/i)).not.toBeNull();
    expect(screen.getByText(/Rosids/i)).not.toBeNull
    expect(screen.getByText(/Malus/i)).not.toBeNull
    expect(screen.getByText(/52/i)).not.toBeNull
    expect(screen.getByText(/0.1/i)).not.toBeNull
    expect(screen.getByText(/0.3/i)).not.toBeNull
    expect(screen.getByText(/10/i)).not.toBeNull
    expect(screen.getByText(/11/i)).not.toBeNull
    });
});