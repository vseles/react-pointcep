import Head from 'next/head';
import App from '../components/App';
import GlobalStyle from '../styles/global';
import AppStateProvider from '../state/useAppState';

const Home = () => (
  <React.Fragment>
    <Head>
      <title>PointCEP | Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppStateProvider>
      <GlobalStyle />
      <App />
    </AppStateProvider>
  </React.Fragment>
);

export default Home;