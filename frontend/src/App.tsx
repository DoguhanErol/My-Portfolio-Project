import './App.css';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'
import Layout from './Layout';

const reactQueryClient =  new QueryClient();
function App() {
  
  return (
    <>
      <QueryClientProvider client={reactQueryClient}>
        <Layout />
      </QueryClientProvider>
    </>
  )
}

export default App
