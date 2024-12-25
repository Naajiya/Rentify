import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SubHead from './components/SubHead'
import Carousal from './components/Carousal'




function App() {
  

  return (
    <>
     {/* <h2 className='text-danger fw-5'>refntify</h2> */}
     <Header/>
     <SubHead/>
     <Carousal/>
    </> 
  )
}

export default App
