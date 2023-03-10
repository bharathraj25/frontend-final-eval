import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionFields from '..';

describe('CollectionFields', () => {
  it('should render correctly', () => {
    render(<CollectionFields />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
