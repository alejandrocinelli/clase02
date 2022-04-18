
import './App.css';
import DaisyCart from './components/DaisyCart';
//import DaisyFooter from './components/DaisyFooter';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
     <ItemListContainer titulo="Aca va el nombre del Libro" autor="Nombre del Autor" precio="$200"/>            
    </div>
  );
}

export default App;
