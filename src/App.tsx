import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Analysis from './component/Analysis'
import Login from './component/Login'
import Signup from './component/Signup'
import WithAuthProtection from './component/WithAuthProtection'
import { signOut } from 'firebase/auth'
import { Chart } from './component/Chart'


import { auth } from './firebase-config'
import Home from './component/HomePage'
function App() {
  const Protected=WithAuthProtection(Home)
  
  return (
    <BrowserRouter>
      <div className="App">

     {/* <h1 className='text-3xl'>hello</h1>
     <button onClick={handleSignout}>Logout</button> */}
    
     <Routes>
     <Route path='/' element={< Protected/>}></Route>
     <Route path='/Analysis' element={<Analysis/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path="/chart" element={<Chart />} />
     </Routes>
    </div>
    </BrowserRouter>
    
  )

  const navigate=useNavigate()
  async function handleSignout(){
    signOut(auth)
  .then(() => {
    console.log("User signed out successfully.");
    navigate('/login')
  })
  .catch((error) => {
    console.error("Error signing out:", error);
  });
  }
}

export default App
