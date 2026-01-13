import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders navigation links', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );

  const tourLinks = screen.getAllByRole('link', { name: /tour/i });
  expect(tourLinks.length).toBeGreaterThan(0);
});
