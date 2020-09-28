import React from 'react';
import * as SC from './styles';
import Header from '../Header';
import Search from '../Search';

const App = () => (
  <SC.Container>
    <Header />
    <SC.View>
      <SC.Shell>
        <Search />
      </SC.Shell>
    </SC.View> 
  </SC.Container>
);

export default App;