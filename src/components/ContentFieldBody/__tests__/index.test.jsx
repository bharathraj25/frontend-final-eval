import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentFieldBody from '..';

describe('ContentFieldBody', () => {
  it('should render correctly', () => {
    render(<ContentFieldBody />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
