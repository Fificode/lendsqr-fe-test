import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import DashboardLayout from './pages/DashboardLayout'
import Users from './components/dashboard/Users'
import PrivateRoute from './PrivateRoute'
import PageNotFound from './PageNotFound'
import UserDetails from './components/dashboard/UserDetails'

function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
          <Toaster position="top-right" />
    <Routes>
    {/* Public Route */}
    <Route path="/" element={<Login />} />
    <Route path="*" element={<PageNotFound/>}/>
    {/* Private Route */}
    <Route element={<PrivateRoute />}>
     <Route path="/dashboard" element={<DashboardLayout />}>
<Route path='/dashboard/users' element={<Users />}/> 
  <Route path="/dashboard/users/:id" element={<UserDetails />} />
<Route index element={<Navigate to="users" replace />} />
  </Route>
  </Route>
    </Routes>
    </Suspense>
  )
}

export default App
