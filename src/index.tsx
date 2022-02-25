import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './pages/App';
import { AuthProvider } from './provider/Auth'

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);