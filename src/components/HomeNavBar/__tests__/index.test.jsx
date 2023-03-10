import { render, screen } from '@testing-library/react';
import React from 'react';
import HomeNavBar from '..';

describe('HomeNavBar', () => {
  it('should render correctly', () => {
    render(<HomeNavBar />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
