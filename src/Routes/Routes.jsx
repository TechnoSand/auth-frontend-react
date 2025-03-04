import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration'
import Home from '../Components/Home/Home';


function AppRoutes() {
  

  return (
    
      <div>
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

export default AppRoutes