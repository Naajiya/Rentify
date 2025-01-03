import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import ViewDetails from './pages/ViewDetails'




function App() {


  return (
    <>

      <Header />

      <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element ={<Auth/>} path='/login'/>
        <Route element={<Auth insideRegister={true} /> }  path='/register'/>
        <Route element={<ViewDetails/>} path='/viewdetails'/>
      </Routes>

      <Footer/>



    </>
  )
}

export default App
