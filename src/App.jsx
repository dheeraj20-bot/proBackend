
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'




function App() {
  return (
   
      <div className='w-screen min-h-screen bg-slate-900 flex flex-col font-serif' >
        <Navbar/>
        <Routes>
        <Route
          path="login"
          element={
            
              <Login />
           
          }
        />
        </Routes>
        

      </div>
        
   
  )
}

export default App
