import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './styles/global';
import AppStateProvider from './state/useAppState';
import './styles/_fonts.css';

ReactDOM.render(
  <AppStateProvider>
    <GlobalStyle />
    <App />
  </AppStateProvider>,
  document.getElementById('root')
);