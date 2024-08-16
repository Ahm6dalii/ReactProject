import React from 'react'
import { useSelector } from 'react-redux'


export default function Home() {
 const api=useSelector(state=>state.apiLink.link)
 console.log(api);
 
  
  
  return (
    <>
    <div>Home</div>
</>
)}
