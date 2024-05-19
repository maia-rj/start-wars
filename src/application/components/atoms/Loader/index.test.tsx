import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader Component', () => {
  test('renders the loader correctly', () => {
    render(<Loader />);
    
    const loadingContainer = screen.getByTestId('loading-container');
    expect(loadingContainer).toBeInTheDocument();
    expect(loadingContainer).toHaveStyle('display: flex');
    expect(loadingContainer).toHaveStyle('justify-content: center');
    expect(loadingContainer).toHaveStyle('align-items: center');
    
    const loaderStyle = screen.getByTestId('loader-style');
    expect(loaderStyle).toBeInTheDocument();
    expect(loaderStyle).toHaveStyle('border: 8px solid #f3f3f3');
    expect(loaderStyle).toHaveStyle('border-top: 8px solid #7000FF'); 
    expect(loaderStyle).toHaveStyle('border-radius: 50%');
    expect(loaderStyle).toHaveStyle('width: 60px');
    expect(loaderStyle).toHaveStyle('height: 60px');
  });
});
