import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <a href='/users'>User List</a>
    </QueryClientProvider>
  )
}

export default App
