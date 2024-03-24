import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from './ArticlesList';
import { Article } from './Article';

describe('ArticlesList Component', () => {
    const mockArticles: Article[] = [
    {
        source: { id: null, name: 'Source One' },
        author: 'Author One',
        title: 'Title One',
        description: 'Description One',
        url: 'https://example.com/one',
        urlToImage: null,
        publishedAt: '2021-04-01T00:00:00Z',
        content: 'Content One',
    },
    {
        source: { id: null, name: 'Source Two' },
        author: 'Author Two',
        title: 'Title Two',
        description: 'Description Two',
        url: 'https://example.com/two',
        urlToImage: null,
        publishedAt: '2021-04-02T00:00:00Z',
        content: 'Content Two',
    },
    ];

    it('renders the correct number of ArticleLink components', () => {
    render(<ArticlesList articles={mockArticles} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockArticles.length);
    });

    it('passes the correct article to each ArticleLink', () => {
    render(<ArticlesList articles={mockArticles} />);
    mockArticles.forEach(article => {
        expect(screen.getByRole('link', { name: article.title })).toHaveAttribute('href', article.url);
    });
    });
});
