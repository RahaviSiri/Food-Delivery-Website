import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Routes, Route } from "react-router"
import AddItem from './pages/AddItem'
import ListItems from './pages/ListItems'
import Order from './pages/Order'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr />
      <div className='flex'>
        <SideBar/>
        <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/add-item' element={<AddItem/>}/>
            <Route path='/list-item' element={<ListItems/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App