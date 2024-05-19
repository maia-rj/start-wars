import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './index';

describe('Pagination Component', () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  test('renders the pagination component correctly', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);

    expect(screen.getByText('1 / 5')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
    expect(screen.getByLabelText('Next page')).not.toBeDisabled();
  });

  test('disables the next button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);

    expect(screen.getByText('5 / 5')).toBeInTheDocument();
    expect(screen.getByLabelText('Previous page')).not.toBeDisabled();
    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });

  test('calls onPageChange with the previous page when the previous button is clicked', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);

    const previousButton = screen.getByLabelText('Previous page');
    fireEvent.click(previousButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange with the next page when the next button is clicked', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={onPageChange} />);

    const nextButton = screen.getByLabelText('Next page');
    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  test('disables the previous button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);

    const previousButton = screen.getByLabelText('Previous page');
    expect(previousButton).toBeDisabled();
  });
});
