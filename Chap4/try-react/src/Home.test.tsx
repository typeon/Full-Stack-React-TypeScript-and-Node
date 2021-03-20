import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders home page', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/typeon/i);
  expect(linkElement).toBeInTheDocument();
});
