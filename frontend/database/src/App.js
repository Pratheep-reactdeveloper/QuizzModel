import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path ='/' element ={<LoginPage />}></Route>
          <Route path ='/registerpage' element ={<RegisterPage />}></Route>
          <Route path ='/home' element={<Home/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}


export default App;
