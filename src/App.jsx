import { useState } from 'react'

import './App.css'
import { useSelector } from 'react-redux'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'

function App() {
  let sel=useSelector(state=>state.counter)
  console.log(sel)
  const queryClient = new QueryClient()

  return (
    <>
      <h1>Vite + React <i className='fa fa-home'></i></h1>
      <QueryClientProvider client={queryClient}>

   <BrowserRouter>
   <Routes>
    <Route path='' element={<Layout ></Layout>}>

    <Route path='' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>

    </Route>
   </Routes>
   </BrowserRouter>

    </QueryClientProvider>
   
     
    </>
  )
}

export default App
