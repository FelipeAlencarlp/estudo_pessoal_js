import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import CadastroUsuarios from './pages/CadastroUsuarios/CadastroUsuarios';
import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CadastroUsuarios/>
    </QueryClientProvider>
  );
}

export default App;
