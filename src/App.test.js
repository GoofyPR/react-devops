import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main headings', () => {
  render(<App />);
  
  const completeHeading = screen.getByText(/(\d+)\/(\d+) Complete/i);
  const messageHeading = screen.getByText(/Try to do at least one!|Nice job for today!|Continue the good work/i);
  
  expect(completeHeading).toBeInTheDocument();
  expect(messageHeading).toBeInTheDocument();
});

