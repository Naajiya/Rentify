import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SubHead from './components/SubHead'
import Carousal from './components/Carousal'
import AllItems from './components/AllItems'



function App() {
  

  return (
    <>
     {/* <h2 className='text-danger fw-5'>refntify</h2> */}
     <Header/>
     <SubHead/>
     <Carousal/>
     <AllItems/>
    </> 
  )
}

export default App
