
import './App.css';
/*import DaisyCart from './components/DaisyCart';*/
//import DaisyFooter from './components/DaisyFooter';
import DaisyNavBar from './components/DaisyNavBar';
/*import ItemCount from './components/ItemCount';*/
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemCartContainer from './components/ItemCartContainer';


function App() {
  return (
        <div className="App">
    <BrowserRouter>
      <DaisyNavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Venta de Peliculas" autor="La Mejor Selecion"/>  } />
        <Route path='/category/:categoryid' element={<ItemListContainer titulo="Categoria de Peliculas"/>  } />
        <Route path='/movie/:itemid' element={<ItemDetailContainer />  } />
        <Route path='/cart' element={<ItemCartContainer titulo="El Carrito"/>  }> </Route>
     {/*<ItemDetailContainer/> */}
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
