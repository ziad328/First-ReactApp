import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/contact'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'


const router = createBrowserRouter([
  { path:'' , element: <Layout/> , children: [
    { path:'' , element: <Home/>},
    { path:'about' , element: <About/>},
    { path:'portfolio' , element: <Portfolio/>},
    { path:'contact' , element: <Contact/>},
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
