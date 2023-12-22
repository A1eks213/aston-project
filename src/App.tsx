import './App.css';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './components/Fallback';
import { useAppDispatch } from './hooks/reduxHooks';
import RoutesComponent from './routes/RoutesComponent';
import { checkAuthStateAction } from './redux/actions/authorizationActions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthStateAction())
  }, [dispatch])
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback}>
        <RoutesComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
