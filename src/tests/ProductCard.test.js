import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProductCard from '../components/ProductCard';
import product from '../data/Data';
 

test('renders product card', () => {
  
    render(<ProductCard product={product} />);
    let text = screen.getByText(/beauty/i);

    expect(text).toBeInTheDocument();


     
  // const { getByText } = render(<ProductCard product={product} />);
  // expect(getByText(/Essence Mascara Lash Princess/i)).toBeInTheDocument();
  // expect(getByText(/\$9.99/i)).toBeInTheDocument();
});
