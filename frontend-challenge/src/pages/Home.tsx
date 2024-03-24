import React from 'react';
import Navigation from '../Navigation';
import ListView from '../components/ListView';
import Footer from '../components/Footer';
import '../styles/home.less';

interface HomeProps {
  selectedCategory?: string;
  onCategorySelect: (category: string) => void;
}

const Home: React.FC<HomeProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="dark-theme">
      <Navigation onCategorySelect={onCategorySelect} />
      <div className="content-container">
        <ListView category={selectedCategory} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
