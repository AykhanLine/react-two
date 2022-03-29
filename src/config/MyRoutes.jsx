import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'

const MyRoutes = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  exact path='/Haqqimizda' element={<About/>} />
        <Route  exact path='/KontaktSehifesi' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default MyRoutes