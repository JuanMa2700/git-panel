import { AppStateProvider } from './contexts/AppStateContext';
import AppRoutes from './routes';
import ControlPanelComponent from './components/ControlPanel';

function App() {
  return (
    <AppStateProvider>
      <AppRoutes />
      <ControlPanelComponent />
    </AppStateProvider>
  );
}

export default App;
