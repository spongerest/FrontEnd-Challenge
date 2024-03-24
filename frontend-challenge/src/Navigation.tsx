import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { groupArticlesBySource } from './components/utils';
import { Article } from './components/Article';
import './styles/navigation.less';

interface SourceWithCount {
  name: string;
  count: number;
}

interface NavigationProps {
  onCategorySelect: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCategorySelect }) => {
  const [sources, setSources] = useState<SourceWithCount[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }
      const data = await response.json();
      const articles: Article[] = data.articles || [];
      const grouped = groupArticlesBySource(articles);
      const sourcesWithCount = Object.keys(grouped).map(name => ({
        name,
        count: grouped[name].length,
      }));
      setSources(sourcesWithCount);
    };

    fetchData();
  }, []);

  const menuItems = sources.map(source => ({
    key: source.name,
    label: (
      <span onClick={() => onCategorySelect(source.name)}>
        {source.name} ({source.count})
      </span>
    ),
  }));

  const items = [
    { key: 'home', label: <span onClick={() => onCategorySelect('')}>Home</span> },
    {
      key: 'categories',
      label: 'Categories',
      children: menuItems,
    },
  ];

  return (
    <div className="navigation-container">
      <Menu mode="horizontal" theme="dark" items={items} />
    </div>
  );
};

export default Navigation;
