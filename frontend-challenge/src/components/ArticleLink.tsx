import React from 'react';
import { Article } from './Article';

interface ArticleProps {
    article: Article;
}

const ArticleLink: React.FC<ArticleProps> = ({ article }) => (
    <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    >
    {article.title}
    </a>
);

export default ArticleLink;
