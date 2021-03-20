import React from 'react';
import { render } from '@testing-library/react';
import AnotherScreen from './AnotherScreen';

test('renders another screen page', () => {
  const { getByText } = render(<AnotherScreen />);
  const linkElement = getByText(/Another Screen/i);
  expect(linkElement).toBeInTheDocument();
});
