import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './pages/Login'
import { Suspense } from 'react'

function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Login />} />
    </Routes>
    </Suspense>
  )
}

export default App
