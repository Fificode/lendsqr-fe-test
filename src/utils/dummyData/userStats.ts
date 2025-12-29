import AllUsers from "../../assets/images/all-users.svg?react"
import ActiveUsers from "../../assets/images/active-users.svg?react"
import UsersLoan from "../../assets/images/users-loan.svg?react"
import Coins from "../../assets/images/coins.svg?react"


export const userStatsData = [
    {
        id: 1,
        title: "Users",
        value: "2,453",
        icon: AllUsers,
        iconColor: "rgba(223, 24, 255, 0.1)",
    },
    {
        id: 2,
        title: "Active Users",
        value: "2,453",
        icon: ActiveUsers,
        iconColor: "rgba(87, 24, 255, 0.1)"
    },
    {
        id: 3,
        title: "Users with Loans",
        value: "12,453",
        icon: UsersLoan,
        iconColor: "rgba(245, 95, 68, 0.1)"
    },
    {
        id: 4,
        title: "Users with Savings",
        value: "102,453",
        icon: Coins,
        iconColor: "rgba(255, 51, 102, 0.1)"
    },
]