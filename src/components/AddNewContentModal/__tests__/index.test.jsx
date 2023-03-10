import { render, screen } from '@testing-library/react';
import React from 'react';
import AddNewContentModal from '..';

describe('AddNewContentModal', () => {
  it('should render correctly', () => {
    render(<AddNewContentModal />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
