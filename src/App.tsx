// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import Home from './views/Home'
import Explore from './views/Explore'
import Notifications from './views/Notifications'
import More from './views/More'
import Profile from './views/Profile'
import Communities from './views/Communities'
import Lists from './views/Lists'
import Messages from './views/Messages'
import Header from './components/Header';

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path='/' />
            <Route path='/home' element={<Home/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/messages' element={<Messages/>} />
            <Route path='/lists' element={<Lists/>} />
            <Route path='/communities' element={<Communities/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/more' element={<More/>} />
            <Route path='*' element={<Navigate to='/'/>} />
            {/* in this one, when there is no content, it should be redirected to page not found then after 2 secs will redirect to homepage or sign up page */}
          </Routes>
        </Router>
      </HelmetProvider>
      <Header/>
    </>
  )
}

export default App
