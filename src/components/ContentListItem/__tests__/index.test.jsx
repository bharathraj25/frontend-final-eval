import { render, screen } from '@testing-library/react';
import React from 'react';
import ContentListItem from '..';

describe('ContentListItem', () => {
  it('should render correctly', () => {
    render(<ContentListItem />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
