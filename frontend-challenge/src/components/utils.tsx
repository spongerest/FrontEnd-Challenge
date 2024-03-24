import { Article } from './Article';

export const groupArticlesBySource = (articles: Article[]): { [key: string]: Article[] } => {
  return articles.reduce((acc, article) => {
    const sourceName = article.source.name;
    acc[sourceName] = acc[sourceName] || [];
    acc[sourceName].push(article);
    return acc;
  }, {} as { [key: string]: Article[] });
};