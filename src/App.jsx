import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration'

function App() {
  

  return (
    
      <div className='App'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/registration' element={<Registration />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  
  )
}

export default App
