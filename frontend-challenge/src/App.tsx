import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const onCategorySelect = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
    console.log("Kategori Terpilih:", category);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} onCategorySelect={onCategorySelect} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
