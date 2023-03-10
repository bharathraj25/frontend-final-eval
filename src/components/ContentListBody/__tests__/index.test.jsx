import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentListBody from '..';

describe('ContentListBody', () => {
  it('should render correctly', () => {
    render(<ContentListBody />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
