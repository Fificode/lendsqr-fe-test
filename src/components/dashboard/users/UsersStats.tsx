import styles from "../../../scss/dashboard/users/users.module.scss"

type UserStatsProps = {
title: string;
value: string;
iconColor: string;
icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const UsersStats = ({iconColor, icon: Icon, title, value}: UserStatsProps) => {
  return (
    <div className={styles.user_stats}>
<div style={{ backgroundColor: iconColor }} className={styles.icon_circle}>
    <Icon className={styles.icon} />
    </div>
<h2 className={styles.title}>{title}</h2>
<h3 className={styles.value}>{value}</h3>
  </div>
  )
}

export default UsersStats