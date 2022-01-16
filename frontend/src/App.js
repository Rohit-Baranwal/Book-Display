import './App.css';
import Books from './components/Books/Books';
import Header from './components/Header/Header';

function App() {
  return (
      <>
      <Header />
      <div className="app">
        <Books header="latest" />
        <Books header="Other" />
      </div>
      </>
  );
}

export default App;
