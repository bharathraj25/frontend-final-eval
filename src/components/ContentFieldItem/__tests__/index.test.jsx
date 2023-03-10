import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentFieldItem from '..';

describe('ContentFieldItem', () => {
  it('should render correctly', () => {
    render(<ContentFieldItem />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
