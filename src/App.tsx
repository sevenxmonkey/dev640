import './App.scss';
import AppLayout from './components/AppLayout';
import { AppLayoutContextProvider } from './hooks/useAppLayout';

function App() {
  return (
    <div className="App">
      <AppLayoutContextProvider>
        <AppLayout />
      </AppLayoutContextProvider>
    </div>
  );
}

export default App;
