import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FruitList from '../components/fruit-list';

describe('FruitList component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
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
            }
          ]),
      })
    );
  });

  it('renders the FruitList component', async () => {
    render(<FruitList />);
    expect(await screen.findByText(/Apple/i)).not.toBeNull();
  });

  it('filters fruits when search is performed', async () => {
    render(<FruitList />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Apple' } });
    fireEvent.submit(screen.getByRole('button')); // Assuming the search button has a role attribute
    expect(await screen.findByText(/Apple/i)).not.toBeNull();
    // You can also test that other fruits are not displayed
  });
});
