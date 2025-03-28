import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import ViewDetails from './pages/ViewDetails'
import Cart from './pages/Cart'

import Login from './Admin/pags/Login'
import DashBoard from './Admin/pags/DashBoard'
import Items from './Admin/pags/Items'
import Address from './pages/Address'
import BookedItems from './pages/BookedItems'
import Category from './pages/Category'
import Orders from './Admin/pags/Orders'
import SearchProducts from './pages/SearchProducts'
import { toast, ToastContainer } from 'react-toastify'
import DeliverdPrdcts from './Admin/pags/DeliverdPrdcts'
import ProfilePage from './pages/ProfilePage'



// import Login from '../Admin/pags/Login'
// import Dashboard from '../Admin/pags/Dashboard'
// import Items from '../Admin/pags/Items'




function App() {


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"

      />
      {/* <Header /> */}

      <Routes>
        {/* user */}
        <Route element={<LandingPage />} path='/' />
        <Route element={<Auth />} path='/login' />
        <Route element={<Auth insideRegister={true} />} path='/register' />
        <Route element={<ViewDetails />} path='/:pid/viewdetails' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Address />} path="/address" />
        <Route element={<BookedItems />} path='/bookedItems' />
        <Route element={<Category />} path='/:category/category' />
        <Route element={<SearchProducts />} path='/SearchProducts/products' />
        <Route element={<ProfilePage/>} path='/profile'/>


        {/* admin */}

        <Route element={<Login />} path='/admin/login' />
        <Route element={<DashBoard />} path='/admin/dashBoard' />
        <Route element={<Items />} path='/admin/items' />
        <Route element={<Orders />} path='/admin/orders' />
        <Route element={<DeliverdPrdcts />} path='/admin/deliverds' />

      </Routes>

      <Footer />



    </>
  )
}

export default App
