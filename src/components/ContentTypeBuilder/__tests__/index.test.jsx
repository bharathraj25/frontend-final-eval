import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentTypeBuilder from '..';

describe('ContentTypeBuilder', () => {
  it('should render correctly', () => {
    render(<ContentTypeBuilder />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
