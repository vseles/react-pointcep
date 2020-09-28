import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);