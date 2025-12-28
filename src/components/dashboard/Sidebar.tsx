import { NavLink } from "react-router-dom";
import { topTabs, tabs, bottomTabs } from "../../utils/sidebarTabs";
import styles from "../../scss/dashboard/sidebar.module.scss";
import ArrowDown from "../../assets/images/arrow-down.svg?react"

export default function Sidebar() {
  return (
    <aside className={`${styles.sidebar} custom-scrollbar`}>
      
      {/* TOP TABS */}
      <div className={styles.topTabs}>
        {topTabs.map((item, index) => (
          <button key={index} className={styles.topbarButton}>
            {item.icon}
            <span>{item.name}</span>
            <ArrowDown className={styles.arrow_icon}/>
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

          return (
            <NavLink
              key={item.id}
              to={item.path}
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
        {bottomTabs.map((item, index) => (
          <button key={index} className={styles.bottombarButton}>
            {item.icon && item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>

    </aside>
  );
}
