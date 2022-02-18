import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './pages/App';
import DashBoard from './pages/DashBoard'

ReactDOM.render(
  <React.StrictMode>
      <DashBoard />
  </React.StrictMode>,
  document.getElementById('root')
);