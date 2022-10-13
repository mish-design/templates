import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { CommonLayout } from 'src/components/layouts/CommonLayout';
import { theme } from 'src/utils/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
