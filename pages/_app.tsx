// Import global styles
import 'styles/globals.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Layout from 'components/shared/Layout';
import { createEmotionCache, theme } from 'lib/mui';
import { store } from 'lib/redux';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { Provider } from 'react-redux';

// Binding events for loading indicator when navigating.
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
nProgress.configure({ showSpinner: false }); // Remove spinner

type AppPropsExtended = AppProps & {
  emotionCache: EmotionCache;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsExtended) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
