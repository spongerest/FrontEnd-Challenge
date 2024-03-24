import React from 'react';
import { createRoot } from 'react-dom/client';

// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';
import './styles/main.less';
import './styles/layout.less';
import './styles/components.less';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
