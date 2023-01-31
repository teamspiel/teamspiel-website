import React from 'react';
import ReactDom from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './css/style.css';
import { NavigationComponent } from './components/NavigationComponent';
import { FooterComponent } from './components/FooterComponent';

const root = ReactDom.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <NavigationComponent />
    <main className="main">
      <HomePage />
    </main>
    <FooterComponent />
  </React.StrictMode>
);
