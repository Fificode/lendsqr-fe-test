import { NavLink, useNavigate } from "react-router-dom";
import { topTabs, tabs } from "../../utils/sidebarTabs";
import styles from "../../scss/dashboard/sidebar.module.scss";
import ArrowDown from "../../assets/images/arrow-down.svg?react";
import SignOut from "../../assets/images/sign-out.svg?react";
import { IoClose } from "react-icons/io5";


type SidebarProps = {
isOpen: boolean;
toggleSidebar: () => void;
}

export default function Sidebar({isOpen, toggleSidebar}: SidebarProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/");
  }
  return (
    <aside className={`${styles.sidebar} custom-scrollbar  ${isOpen ? styles.mobile_sidebar : ""}`} >
      <div className={styles.close_container}>
       {isOpen && <IoClose className={styles.close_icon} onClick={toggleSidebar} />}
      </div>
      {/* TOP TABS */}
      <div className={styles.topTabs}>
        {topTabs.map((item, index) => (
          <button key={index} className={styles.topbarButton}>
            {item.icon}
            <span>{item.name}</span>
            <ArrowDown className={styles.arrow_icon} />
          </button>
        ))}
      </div>

      {/* MAIN NAVIGATION */}
      <nav className={styles.nav}>
        {tabs.map((item, index) => {
          if ("subheading" in item) {
            return (
              <p key={index} className={styles.subheading}>
                {item.subheading}
              </p>
            );
          }
          if (item.disabled) {
            return (
              <div key={item.id} className={styles.disabledLink}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            );
          }
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
      {/* BOTTOM TABS */}
      <div className={styles.bottomTabs}>
        <button type="button" onClick={handleLogout} className={styles.bottombarButton}>
          <SignOut className={styles.logout_icon} />
          <span>Logout</span>
        </button>

        <span className={styles.version_text}>v1.2.0</span>
      </div>
    </aside>
  );
}
