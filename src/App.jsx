import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'




function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route element={<LandingPage />} path='/' />
      </Routes>

      <Footer/>



    </>
  )
}

export default App
