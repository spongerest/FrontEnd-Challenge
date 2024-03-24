import React from 'react';
import ArticleLink from './ArticleLink';
import { Article } from './Article';

interface ArticlesListProps {
    articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => (
    <div>
    {articles.map(article => (
        <ArticleLink key={article.url} article={article} />
    ))}
    </div>
);

export default ArticlesList;
