import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'

const AllRoutes:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
