import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

export default function () {
    
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>  

    </>
  )
}
