import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import { Dashboard } from './pages/Dashboard'


function App() {
  return (
   
      <div className='w-screen min-h-screen bg-slate-200 flex flex-col font-serif' >
        <Navbar/>
        <Routes>
        <Route path="consultant/login"element={<Login/>}/>
        
        <Route path="consultant/dashboard"element={<Dashboard/>}/>

        </Routes>
        

      </div>
        
   
  )
}

export default App
