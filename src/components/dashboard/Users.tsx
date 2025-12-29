import styles from "../../scss/dashboard/users.module.scss"
import UsersStats from "./users/UsersStats"
import { userStatsData } from "../../utils/dummyData/userStats"
import type { userStats } from "../../types/userStats"

const Users = () => {
  return (
    <div className={styles.users_container}>
      <h1 className={styles.heading}>Users</h1>
      {/* Users Stats */}
      <section className={`${styles.user_stats_container} custom-scrollbar`}>
{
 userStatsData.map((user: userStats) => ( 
  <UsersStats key={user.id} title={user.title} icon={user.icon} iconColor={user.iconColor} value={user.value}/>
 )) 
}
      </section>
      {/* Users List */}
      <section>

      </section>
    </div>
  )
}

export default Users