
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'

import Admin from './admin/pages/Admin'

import Register from './pages/register/Register'
import Login from './pages/login/login'
import ProtectedRoot from './pages/protectedRoot/ProtectedRoot'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
   <BrowserRouter>
   <Routes>
    <Route path='' element={<Layout ></Layout>}>
    <Route path='' element={<Home></Home>}></Route>
    <Route path='/about' element={<ProtectedRoot> <About></About></ProtectedRoot>}></Route>
      <Route path='/admin/*' element={<Admin />}></Route>

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
