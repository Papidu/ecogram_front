import './App.css';
import Headers from './components/Headers'
import UserTable from './pages/views/UserTable';
import React from 'react'
import SideBar from './components/sidebar/SideBar';
import UserInfo from './pages/userInfo/UserInfo';
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <Headers/> 
      <div className='container'>
        <SideBar/>
        <Routes>
          <Route exact path="/" element={<UserInfo/>}/>           
          <Route exact path="/table"element={<UserTable/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
