import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionType from '..';

describe('CollectionType', () => {
  it('should render correctly', () => {
    render(<CollectionType />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
