import { render, screen } from '@testing-library/react';
import React from 'react';
import CollectionFieldItem from '..';

describe('CollectionFieldItem', () => {
  it('should render correctly', () => {
    render(<CollectionFieldItem />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
