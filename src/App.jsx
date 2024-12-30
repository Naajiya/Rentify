import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'




function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route element={<LandingPage />} path='/' />
      </Routes>



    </>
  )
}

export default App
