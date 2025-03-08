import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Authscreen from '../Components/Authscreen/Authscreen';
import Loginform from '../Components/Loginform/Loginform';
import Registrationform from '../Components/Registrationform/Registrationform';


function AppRoutes() {
  

  return (
    
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Authscreen form={<Loginform/>} />}></Route>
              <Route path='/registration' element={<Authscreen form={<Registrationform/>} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  
  )
}

export default AppRoutes