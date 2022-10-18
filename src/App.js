
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import Adduser from './components/Adduser';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'


function App() {

  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null);
  return (
 
      <div className="app">
          <Navbar setToken={setToken}/>
          <Routes>
          <Route path='/Adduser' element={<Adduser/>} />
          </Routes>
          {token ? <Products /> : <Login  token={token} setToken={setToken} />}
          
      </div>

  );
}

export default App;
