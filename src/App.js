import './App.css';
import Headers from './components/Headers'
import UserTable from './pages/views/UserTable';
import React from 'react'
import SideBar from './components/sidebar/SideBar';
import UserInfo from './pages/userInfo/UserInfo';
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import User from './pages/Users/User';


function App() {
  return (
    <Router>
      <Headers/> 
      <div className='container'>
        <SideBar/>
        <Routes>
          <Route path="/" element={<UserInfo/>}/>           
          <Route exact path="/users"element={<UserInfo/>}/>
          <Route exact path="/user/:userId"element={<User/>}/>
          <Route exact path="/table2"element={<UserTable/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
