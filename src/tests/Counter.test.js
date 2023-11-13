import React from "react";
import Counter from '../components/Counter';
import { render, screen, fireEvent } from '@testing-library/react';


beforeEach(() => {
 render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
   const count = screen.getByTestId('count');
   const up = screen.getByText('+');
   fireEvent.click(up);
   expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
   const count = screen.getByTestId('count');
   const down = screen.getByText('-');
   fireEvent.click(down);
   expect(count).toHaveTextContent('-1');
});
