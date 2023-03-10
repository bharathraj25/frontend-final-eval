import { render, screen } from '@testing-library/react';
import React from 'react';
import AddNewFieldModal from '..';

describe('AddNewFieldModal', () => {
  it('should render correctly', () => {
    render(<AddNewFieldModal />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
