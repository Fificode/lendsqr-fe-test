import { Outlet } from "react-router-dom"
import Header from "../components/dashboard/Header"
import layoutStyles from "../scss/dashboardlayout.module.scss"
import Sidebar from "../components/dashboard/Sidebar"
// import { useState } from "react"

const DashboardLayout = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
  // isOpen={isSidebarOpen}
  return (
     <div className={layoutStyles.dashboard}>
      <Header  />
      <div className={layoutStyles.body}>
        <Sidebar  />
        <main className={layoutStyles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout