import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  );
}

export default App;
