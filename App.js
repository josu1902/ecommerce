import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar>
        <ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
      </Navbar>
    </div>
  );
}

export default App;
