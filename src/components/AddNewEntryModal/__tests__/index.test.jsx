import { render, screen } from '@testing-library/react';
import React from 'react';
import AddNewEntryModal from '..';

describe('AddNewEntryModal', () => {
  it('should render correctly', () => {
    render(<AddNewEntryModal />);
    expect(screen.getByText('')).toBeTruthy();
  });
});
