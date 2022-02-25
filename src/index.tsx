import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './pages/App';
import { AuthProvider } from './provider/Auth'
import Router from './components/Router/Router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
        <React.StrictMode>
            <Router></Router>
        </React.StrictMode>
      </AuthProvider>
    </BrowserRouter>,
  document.getElementById('root')
);