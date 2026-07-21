import React, { useEffect } from 'react'
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from '../utils/firebase'
import api from '../utils/axios'
import Home from './pages/Home'
import getCurrentUser from './features/getCurrentUser'

const App = () => {
  useEffect(()=>{
    const getUser=async ()=>{
      await getCurrentUser()
    }
    getUser()
  },[])
  
  return (
    <>
    <Home/>
    </>
  )
}

export default App
