import styles from "../../scss/dashboard/users.module.scss"
import tableStyles from "../../scss/dashboard/users.table.module.scss"
import UsersStats from "./users/UsersStats"
import { userStatsData } from "../../utils/dummyData/userStats"
import type { userStats } from "../../types/userStats"
import UsersTable from "./users/UsersTable"
import { headers, data } from "../../utils/dummyData/userList"
import type { UserList } from "../../types/userLists"
import Ellipsis from "../../assets/images/ellipsis.svg?react"



// eslint-disable-next-line react-refresh/only-export-components
export const renderRowUser = (
  item: UserList,
  index: number,
  rowClass: string,
  onClick: (user: UserList) => void
) => {
  const statusClass =
  tableStyles[item.status.toLowerCase() as keyof typeof tableStyles];

  return (
    <tr key={item.id} className={rowClass}>
      <td className={tableStyles.td}>
        {item.company}
      </td>

      <td className={tableStyles.td}>
        {item.username}
      </td>

      <td className={`${tableStyles.td} ${tableStyles.email}`}>
        {item.email}
      </td>

      <td className={tableStyles.td}>
        {item.phone}
      </td>

      <td className={tableStyles.td}>
        {new Date(item.date_joined).toLocaleDateString()}
      </td>

      <td className={tableStyles.td}>
        <span
    className={`${tableStyles.status} ${statusClass}`}
  >
    {item.status}
  </span>
      </td>

      <td
       className={`${tableStyles.td} ${tableStyles.ellipsis}`}
        onClick={() => onClick(item)}
      >
        <Ellipsis/>
      </td>
    </tr>
  );
};

const Users = () => {
  
  const handleClick = (user: UserList) => {
     console.log(user);
  };
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
      <section className={styles.table_container}>
<UsersTable  headers={headers}
  data={data}
  renderRow={(item, index, rowClass) =>
    renderRowUser(item, index, rowClass, handleClick)
                }/>
      </section>
    </div>
  )
}

export default Users