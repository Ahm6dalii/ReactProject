import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
export default function Home() {
  const notify = () =>toast.success('Successfully created!');
  ;
  return (
    <>
    <div>Home</div>
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
    </>
  )
}
