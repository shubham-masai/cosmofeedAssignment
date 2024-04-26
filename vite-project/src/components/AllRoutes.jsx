import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Thank from '../pages/Thank'
import Home from '../pages/Home'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                {/* <Route path='/welcome' element={<Welcome />} />
                <Route path='/thank' element={<Thank />} /> */}
                <Route path='/home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default AllRoutes