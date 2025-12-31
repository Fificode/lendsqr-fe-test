import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "../../scss/dashboard/users/users.details.module.scss"
import ArrowBack from "../../assets/images/arrow-back.svg?react"
import {data} from "../../utils/dummy-data/userList"
import ProfileIcon from "../../assets/images/user.svg?react"
import FilledStar from "../../assets/images/star-fill.svg?react"
import OutlineStar from "../../assets/images/star-outline.svg?react"
import { userTabs } from "../../utils/userTabs";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the user that matches the ID in the URL
  const user = data.find((item) => String(item.id) === id);

  // When user isn't found
  if (!user) {
    return (
      <div className={styles.container}>
        <p>User not found</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
        <button className={styles.back_button} onClick={() => navigate(-1)}><ArrowBack className={styles.arrow_back}/> <span>Back to Users</span></button>
         <div className={styles.heading_button_container}>
          <h1 className={styles.heading}>User Details</h1>
          <div className={styles.button_container}>
            <button type="button" className={styles.blacklist_user}>Blacklist User</button>
            <button type="button" className={styles.activate_user}>Activate User</button>
          </div>
         </div>
<section className={styles.first_card_container}>
  <div className={styles.profile_container}>
{/* Avatar and Username */}
<div className={styles.avatar_username_container}>
<div className={styles.avatar}>
<ProfileIcon className={styles.profile_icon}/>
</div>
<div className={styles.username}>
<h2>{user?.name}</h2>
<p>{user?.id}</p>
</div>
</div>
{/* User's tier */}
<div className={styles.user_tier_container}>
  <h3>User’s Tier</h3>
  <div className={styles.star_container}>
    <FilledStar/>
    <OutlineStar/>
    <OutlineStar/>
  </div>
</div>
{/* User's balance */}
<div className={styles.user_balance_container}>
<h2>₦200,000.00</h2>
<p>9912345678/Providus Bank</p>
</div>
  </div>
  {/* SubTabs */}
<div className={`${styles.navlinks_container} custom-scrollbar`}>
  {userTabs.map((tab) =>
    tab.enabled ? (
      <NavLink
        key={tab.label}
        end
        to={tab.path}
        className={({ isActive }) =>
          `${styles.navlink} ${isActive ? styles.active : ""}`
        }
      >
        {tab.label}
      </NavLink>
    ) : (
      <span
        key={tab.label}
        className={`${styles.navlink}`}
      >
        {tab.label}
      </span>
    )
  )}
</div>

</section>

<section className={styles.tab_content}>
  <Outlet />
</section>
    </div>
  );
};

export default UserDetails;
