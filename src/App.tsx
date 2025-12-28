import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './pages/Login'
import { Suspense } from 'react'
import { Toaster } from 'sonner'

function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
          <Toaster position="top-right" />
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Login />} />
    </Routes>
    </Suspense>
  )
}

export default App
