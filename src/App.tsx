import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import  Router  from "./Router";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
      <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App