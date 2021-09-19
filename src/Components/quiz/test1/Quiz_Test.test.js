import React from 'react';
import { render } from '@testing-library/react';
import Quiz from './Quiz_Test';

test('renders learn react link', () => {
  const { getByText } = render(<Quiz />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
