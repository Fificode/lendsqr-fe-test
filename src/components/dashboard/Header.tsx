import headerStyles from "../../scss/dashboard/header.module.scss"
import logo from "../../assets/images/lendsqr-logo.png"
import { Link } from "react-router-dom"
import NotificationBell from "../../assets/images/bell.svg?react"
import Search from "../../assets/images/search.svg?react"
import Avatar from "../../assets/images/avatar.png"
import ArrowDropDown from "../../assets/images/dropdown-profile.svg?react"
import { IoMenu } from "react-icons/io5"


type HeaderProps= {
toggleSidebar: () => void;
isOpen: boolean;
}

const Header = ({toggleSidebar, isOpen}: HeaderProps) => {

  return (
    <header className={headerStyles.container}>
 <section>
  {/* Logo */}
  <div  className={headerStyles.logo}>
  <img src={logo} alt="Lendsqr Logo"/>
</div>
{/* Search bar */}
        <div className={headerStyles.header_search}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <Search className={headerStyles.search_icon}/>
          </button>
        </div>
        {/* Actions: Docs, Notification Bell, Avatar & Profile drop-down */}
        <div className={headerStyles.header__user_info}>
          {!isOpen && <IoMenu onClick={toggleSidebar} className={headerStyles.menu_bar}/>}
     
          <Link to="/">Docs</Link>
        <NotificationBell className={headerStyles.notification_bell}/>

          <div className={headerStyles.header__avatar}>
            <img src={Avatar} alt="Adedeji Avatar" />
            <div className={headerStyles.user_name_container}>
            <p>Adedeji</p>
            <ArrowDropDown className={headerStyles.header__dropdown} />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header