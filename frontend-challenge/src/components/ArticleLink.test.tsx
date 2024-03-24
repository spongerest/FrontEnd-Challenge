import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleLink from './ArticleLink';
import { Article } from './Article';

describe('ArticleLink Component', () => {
    const mockArticle: Article = {
    source: { id: null, name: 'Example Source' },
    author: 'Author Name',
    title: 'Example Title',
    description: 'Example Description',
    url: 'https://example.com',
    urlToImage: null,
    publishedAt: '2021-04-01T00:00:00Z',
    content: 'Example Content',
    };

    it('renders the article link with correct href and text', () => {
    render(<ArticleLink article={mockArticle} />);
    const linkElement = screen.getByRole('link', { name: mockArticle.title });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockArticle.url);
    expect(linkElement).toHaveTextContent(mockArticle.title);
    });

    it('includes target="_blank" and rel="noopener noreferrer" attributes for security', () => {
    render(<ArticleLink article={mockArticle} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
