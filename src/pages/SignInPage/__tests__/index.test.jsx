import { render, screen } from '@testing-library/react';
import React from 'react';
import SignInPage from '..';

describe('SignInPage', () => {
  it('should render correctly', () => {
    render(<SignInPage />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
