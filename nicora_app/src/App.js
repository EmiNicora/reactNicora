import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';

function App() {
  return (
   <>
   <NavBar titulo='Harry Potter Store' />
   <ItemListContainer />
   </>
  );
}

export default App;
