import React from 'react';
import { render, screen } from '@testing-library/react';
import Album from './dashboard/display';

test('renders learn react link', () => {
  render(<Album />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
