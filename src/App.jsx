import { useState } from 'react'

import './App.css'
import { useSelector } from 'react-redux'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Register from './pages/register/Register'
import Login from './pages/login/login'
import ProtectedRoot from './pages/protectedRoot/ProtectedRoot'
import CoursesDetails from './pages/coursesDetails/CoursesDetails'
import Setting from './pages/setting/Setting'
import ProfileSetting from './pages/setting/profileSetting/ProfileSetting'
import AccountSetting from './pages/setting/accountSetting/AccountSetting'

function App() {
  let sel=useSelector(state=>state.counter)
  console.log(sel)
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>

   <BrowserRouter>
   <Routes>
    <Route path='' element={<Layout ></Layout>}>
    <Route path='' element={<Home></Home>}></Route>
    <Route path='/about' element={<ProtectedRoot> <About></About></ProtectedRoot>}></Route>
    <Route path='/coursesD' element={ <CoursesDetails></CoursesDetails>}></Route>
    <Route path='/setting' element={<Setting></Setting>}>
        <Route path='/setting' element={<ProfileSetting></ProfileSetting>}></Route>
        <Route path='/setting/account' element={<AccountSetting></AccountSetting>}></Route>
    </Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>

    </Route>
   </Routes>
   </BrowserRouter>

    </QueryClientProvider>
   
     
    </>
  )
}

export default App
