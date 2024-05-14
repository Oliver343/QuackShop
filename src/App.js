import Home from './pages/Home';
import ContextProvider from './store/ContextProvider';

function App() {

  return (
    <div style={{height: 100}}>
      <ContextProvider>
          <Home />
      </ContextProvider>
    </div >
  );
}

export default App;
