import { AppProps } from 'next/app';

import '../styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
