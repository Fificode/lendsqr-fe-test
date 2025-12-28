import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import DashboardLayout from './pages/DashboardLayout'
import DashboardHome from './components/dashboard/DashboardHome'
import Users from './components/dashboard/Users'
import PrivateRoute from './PrivateRoute'

function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
          <Toaster position="top-right" />
    <Routes>
    {/* Public Route */}
    <Route path="/" element={<Login />} />
    {/* Private Route */}
    <Route element={<PrivateRoute />}>
     <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardHome />} />
<Route path='/dashboard/users' element={<Users />}/> 
  </Route>
  </Route>
    </Routes>
    </Suspense>
  )
}

export default App
