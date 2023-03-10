import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionFieldHeader from '..';

describe('CollectionFieldHeader', () => {
  it('should render correctly', () => {
    render(<CollectionFieldHeader />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
