import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionBodyHeader from '..';

describe('CollectionBodyHeader', () => {
  it('should render correctly', () => {
    render(<CollectionBodyHeader />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
