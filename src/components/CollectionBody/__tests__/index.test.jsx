import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionBody from '..';

describe('CollectionBody', () => {
  it('should render correctly', () => {
    render(<CollectionBody />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
