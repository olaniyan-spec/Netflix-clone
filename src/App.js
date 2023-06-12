import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home.jsx';
import { AuthContextProvider } from './Context/AuthContext';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import Account from './Pages/Account';
import ProtectRoute from './Components/ProtectRoute';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
         <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route  path = '/SignUp' element={<SignUp/>}></Route>
        <Route  path = '/LogIn' element={<LogIn/>}></Route>
        <Route path ='/Account' element={<ProtectRoute><Account/></ProtectRoute>}></Route>
      </Routes>
      <Footer/>
      </AuthContextProvider>
     
      
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
