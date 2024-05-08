import './App.css';
import Home from './pages/Home';
import ContextProvider from './store/ContextProvider';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
           <Home />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
