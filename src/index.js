import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './styles/global';
import './styles/_fonts.css';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);