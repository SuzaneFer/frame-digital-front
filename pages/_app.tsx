import type { AppProps } from 'next/app';
// import GlobalStyle from '../styles/globals';
// import Typography from '../styles/typography';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* <GlobalStyle />
    <Typography /> */}
    <Component {...pageProps} />
  </>
);

export default MyApp;