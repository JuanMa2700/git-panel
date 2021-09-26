import { AppStateProvider } from './contexts/AppStateContext';
import AppRoutes from './routes';
import ControlPanelComponent from './components/ControlPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppStateProvider>
      <AppRoutes />
      <ControlPanelComponent />
      <ToastContainer draggable={false} autoClose={4000} />
    </AppStateProvider>
  );
}

export default App;
