import { AppStateProvider } from './contexts/AppStateContext';
import AppRoutes from './routes';

function App() {
  return (
    <AppStateProvider>
      <AppRoutes />
    </AppStateProvider>
  );
}

export default App;
