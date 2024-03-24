import React, { useEffect, useState } from 'react';
import { List, Card, Alert } from 'antd';
import '../styles/ListView.less';
import { Article } from './Article';
import Spinner from './Spinner';

interface ListViewProps {
  category?: string;
}

const ListView: React.FC<ListViewProps> = ({ category }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(category || 'general')}&apiKey=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles.map((article: Article) => ({
          ...article,
          urlToImage: article.urlToImage || 'https://placehold.co/600x400/000000/FFFFFF/png',
          description: article.description || 'No description available.'
        })));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={articles}
        renderItem={article => (
          <List.Item>
            <Card
              hoverable
              className="news-card"
              cover={<img alt={article.title || 'No title'} src={article.urlToImage || 'https://placehold.co/600x400/000000/FFFFFF/png'} />
            }
              onClick={() => window.open(article.url, '_blank')}
            >
              <Card.Meta
                title={article.title}
                description={article.description}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListView;
