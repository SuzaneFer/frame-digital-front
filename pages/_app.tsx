import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';
import Typography from '../styles/typography';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Typography />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;