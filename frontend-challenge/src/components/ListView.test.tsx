import React from 'react';
import { render, screen } from '@testing-library/react';
import ListView from './ListView';

beforeAll(() => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({ articles: [] }),
  }) as Promise<Response>);
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders spinner while loading articles', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({ articles: [] }),
  });
  
  render(<ListView category="general" />);
  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});

test('renders error message on fetch failure', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API failure'));

  render(<ListView category="general" />);
  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent('Error');
});

test('renders articles after successful fetch', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({
      articles: [{ title: 'Test Article', url: 'https://example.com', urlToImage: 'https://example.com/image.jpg', description: 'Test Description' }]
    }),
  });

  render(<ListView category="general" />);
  const articleTitle = await screen.findByText('Test Article');
  expect(articleTitle).toBeInTheDocument();
});
