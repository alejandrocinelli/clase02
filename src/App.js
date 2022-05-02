
import './App.css';
/*import DaisyCart from './components/DaisyCart';*/
//import DaisyFooter from './components/DaisyFooter';
import DaisyNavBar from './components/DaisyNavBar';
/*import ItemCount from './components/ItemCount';*/

import ItemDetailContainer from './components/ItemDetailContainer';

/*import ItemListContainer from './components/ItemListContainer';*/


function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
     { /*<ItemListContainer titulo="Venta de Peliculas" autor="La Mejore Selecion"/>  */}          
        
     <ItemDetailContainer/>
     
    </div>
  );
}

export default App;
