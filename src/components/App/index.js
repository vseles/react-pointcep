import * as SC from './styles';
import Header from '../Header';
import Search from '../Search';
import Results from '../Results';

const App = () => (
  <SC.Wrapper>
    <Header />
    <SC.View>
      <SC.Shell>
        <Search />
        <Results />
      </SC.Shell>
    </SC.View> 
  </SC.Wrapper>
);

export default App;