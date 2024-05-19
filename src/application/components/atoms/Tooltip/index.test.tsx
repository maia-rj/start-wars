import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './index';

describe('Tooltip Component', () => {
  test('shows tooltip text on hover', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText('Hover me'));

    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });

  test('hides tooltip text when not hovering', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseOver(screen.getByText('Hover me'));
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();

    fireEvent.mouseOut(screen.getByText('Hover me'));
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
  });
});
