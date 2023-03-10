import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionsPage from '..';

describe('CollectionsPage', () => {
  it('should render correctly', () => {
    render(<CollectionsPage />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
