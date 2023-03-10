import { render, screen } from '@testing-library/react';
import React from 'react';
import DeleteConfirmModal from '..';

describe('DeleteConfirmModal', () => {
  it('should render correctly', () => {
    render(<DeleteConfirmModal />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
