import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes,Route, BrowserRouter,useParams, useLocation  } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Discover from './pages/Discover/Discover'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Admin from './Dashboard/Admin'
import Details from './pages/Details/Details'
import NotFound from './pages/NotFound/Notfound'
import './App.scss'
import { StateContext } from './Context/StateContext'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'

const App = () => {
  const {pathname} = useLocation();
  const hidenav = ['/login','/register']

  return (
    <StateContext>
      {hidenav.includes(pathname)?null:<Navbar/>}
                <Routes>
                  <Route index element={<Home/>}/>
                  <Route path='contact' element={<Contact/>}/>
                  <Route path='discover' element={<Discover/>}/>
                  <Route path='details/:id' element={<Details/>}/>
                  <Route path='*' element={<NotFound/>}/>
                  <Route path='login' element={<Login/>}/>  
                  <Route path='register' element={<Register/>}/>
                </Routes>
    </StateContext>
  )
}


export default App