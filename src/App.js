import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Video from './components/Video'
import Login from './components/Login'
//import Sidebar from './components/Sidebar';
//import { useContext } from 'react';
//import { AppContext } from './components/Context';


function App() {

  const [sidebar, setSidebar] = useState(true);
   //const data = useContext(AppContext);

  return (
    <div className="App">
          <Navbar setSidebar={setSidebar}/>
          <Routes>
            <Route  path='/' element={<Home sidebar={sidebar}/>}/>
            <Route  path='/video/:categoryId/:videoId' element={<Video/>}/>
            <Route  path='/Login' element={<Login/>}/>

          </Routes>
    </div>
  );
}

export default App;
