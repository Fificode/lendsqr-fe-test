import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/dashboard/Header"
import layoutStyles from "../scss/dashboardlayout.module.scss"
import Sidebar from "../components/dashboard/Sidebar"


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar= () => setIsSidebarOpen(!isSidebarOpen)
  return (
     <div className={layoutStyles.dashboard}>
      <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div className={layoutStyles.body}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={layoutStyles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout