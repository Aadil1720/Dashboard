import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import Error401 from './pages/Error401'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Register from './pages/Register'
import StaticNavigation from './pages/StaticNavigation'
import SidenavLight from './pages/SidenavLight'
import Tables from './pages/Tables'
import Charts from './pages/Charts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/password' element={<PasswordReset/>}/>
        <Route path='/error401' element={<Error401/>}/>
        <Route path='/error404' element={<Error404/>}/>
        <Route path='/error500' element={<Error500/>}/>
        <Route path='/staticLayout' element={<StaticNavigation/>}/>
        <Route path='/sidenavbar' element={<SidenavLight/>}/>
        <Route path='/tables' element={<Tables/>}  />
        <Route path='/charts' element={<Charts/>}  />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App
