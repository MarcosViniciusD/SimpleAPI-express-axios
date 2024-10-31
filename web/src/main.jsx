import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Livros from './Livros.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Livros/>
    <App/>
  </StrictMode>,
);
