import App from '../components/App';
import GlobalStyle from '../styles/global';
import AppStateProvider from '../state/useAppState';

const Home = () => {
  return (
    <AppStateProvider>
      <GlobalStyle />
      <App />
    </AppStateProvider>
  );
};

export default Home;