import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UsuariosPage from "./features/usuarios/UsuariosPage";
import './styles/App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsuariosPage/>
    </QueryClientProvider>
  );
}

export default App;
