import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeConfig } from './core/theme';
import { Layout } from './core/layouts';
import Dashboard from './pages/Dashboard';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfig>
        <Layout>
          <Dashboard />
        </Layout>
      </ThemeConfig>
      {/* react query for develop */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
