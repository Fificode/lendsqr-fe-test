import BriefCase from "../assets/images/briefcase.svg?react"
import DashboardHome from "../assets/images/home.svg?react"
import UserFriends from "../assets/images/user-friends.svg?react"
import Guarantors from "../assets/images/guarantors.svg?react"
import Loans from "../assets/images/money-sack.svg?react"
import DecisionModels from "../assets/images/decision.svg?react"
import Savings from "../assets/images/piggy-bank.svg?react"
import MoneyBag from "../assets/images/loan-request.svg?react"
import Whitelist from "../assets/images/whitelist.svg?react"
import Karma from "../assets/images/karma.svg?react"
import SavingsProducts from "../assets/images/savings-product.svg?react"
import Coins from "../assets/images/coins-solid.svg?react"
import Transaction from "../assets/images/transaction.svg?react"
import Galaxy from "../assets/images/galaxy.svg?react"
import UserCog from "../assets/images/user-cog.svg?react"
import Scroll from "../assets/images/scroll.svg?react"
import ChartBar from "../assets/images/chart-bar.svg?react"
import Slider from "../assets/images/sliders.svg?react"
import BadgePercent from "../assets/images/badge-percent.svg?react"
import Clipboard from "../assets/images/clipboard-list.svg?react"
import Tire from "../assets/images/tire.svg?react"


export const topTabs = [
    {
      name: "Switch Organization",
      icon: <BriefCase className=" " />,
    }
]

export const tabs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <DashboardHome className="" />,
      path: "/dashboard",
       disabled: true,
    },
    {
        subheading: "Customers"
    },
    {
      id: 2,
      name: "Users",
      icon: <UserFriends className="" />,
      path: "users",
       disabled: false,
    },
    {
      id: 3,
      name: "Guarantors",
      icon: <Guarantors className="" />,
      path: "guarantors",
       disabled: true,
    },
    {
      id: 4,
      name: "Loans",
      icon: <Loans className="" />,
      path: "loans",
       disabled: true,
    },
    {
      id: 4,
      name: "Decision Models",
      icon: <DecisionModels className="" />,
      path: "decision-models",
       disabled: true,
    },
    {
      id: 5,
      name: "Savings",
      icon: <Savings className="" />,
      path: "savings",
       disabled: true,
    },
    {
      id: 6,
      name: "Loan Requests",
      icon: <MoneyBag className="" />,
      path: "loan-requests",
       disabled: true,
    },
    {
      id: 7,
      name: "Whitelist",
      icon: <Whitelist className="" />,
      path: "whitelist",
       disabled: true,
    },
    {
      id: 8,
      name: "Karma",
      icon: <Karma className="" />,
      path: "karma",
       disabled: true,
    },
     {
        subheading: "Businesses"
    },
    {
      id: 9,
      name: "Organization",
      icon: <BriefCase className="" />,
      path: "organization",
       disabled: true,
    },
    {
      id: 10,
      name: "Loan Products",
      icon: <MoneyBag className="" />,
      path: "loan-products",
       disabled: true,
    },
    {
      id: 11,
      name: "Savings Products",
      icon: <SavingsProducts className="" />,
      path: "savings-products",
       disabled: true,
    },
    {
      id: 12,
      name: "Fees and Charges",
      icon: <Coins className="" />,
      path: "fees-charges",
       disabled: true,
    },
    {
      id: 13,
      name: "Transactions",
      icon: <Transaction className="" />,
      path: "transactions",
       disabled: true,
    },
    {
      id: 14,
      name: "Services",
      icon: <Galaxy className="" />,
      path: "services",
       disabled: true,
    },
    {
      id: 15,
      name: "Service Account",
      icon: <UserCog className="" />,
      path: "service-account",
       disabled: true,
    },
    {
      id: 16,
      name: "Settlements",
      icon: <Scroll className="" />,
      path: "settlements",
       disabled: true,
    },
    {
      id: 17,
      name: "Reports",
      icon: <ChartBar className="" />,
      path: "reports",
       disabled: true,
    },
     {
        subheading: "Settings"
    },
       {
      id: 18,
      name: "Preferences",
      icon: <Slider className="" />,
      path: "preferences",
       disabled: true,
    },   {
      id: 19,
      name: "Fees and Pricing",
      icon: <BadgePercent className="" />,
      path: "fees-pricing",
       disabled: true,
    },   {
      id: 20,
      name: "Audits Logs",
      icon: <Clipboard className="" />,
      path: "audits-logs",
       disabled: true,
    },   {
      id: 21,
      name: "Systems Messages",
      icon: <Tire className="" />,
      path: "systems-messages",
       disabled: true,
    },

  ];
