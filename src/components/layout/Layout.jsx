import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (<>
    <Navbar/>

    <Outlet/>

    <p>FOOOTER</p>
    <p>FOOOTER</p>
    <p>FOOOTER</p>
    <p>FOOOTER</p>
    <p>FOOOTER</p>

</>)
}
