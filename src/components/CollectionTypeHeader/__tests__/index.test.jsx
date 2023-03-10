import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionTypeHeader from '..';

describe('CollectionTypeHeader', () => {
  it('should render correctly', () => {
    render(<CollectionTypeHeader />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
