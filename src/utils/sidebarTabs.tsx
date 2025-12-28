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
import SignOut from "../assets/images/sign-out.svg?react"

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
      path: "",
    },
    {
        subheading: "Customers"
    },
    {
      id: 2,
      name: "Users",
      icon: <UserFriends className="" />,
      path: "users",
    },
    {
      id: 3,
      name: "Guarantors",
      icon: <Guarantors className="" />,
      path: "guarantors",
    },
    {
      id: 4,
      name: "Loans",
      icon: <Loans className="" />,
      path: "loans",
    },
    {
      id: 4,
      name: "Decision Models",
      icon: <DecisionModels className="" />,
      path: "decision-models",
    },
    {
      id: 5,
      name: "Savings",
      icon: <Savings className="" />,
      path: "savings",
    },
    {
      id: 6,
      name: "Loan Requests",
      icon: <MoneyBag className="" />,
      path: "loan-requests",
    },
    {
      id: 7,
      name: "Whitelist",
      icon: <Whitelist className="" />,
      path: "whitelist",
    },
    {
      id: 8,
      name: "Karma",
      icon: <Karma className="" />,
      path: "karma",
    },
     {
        subheading: "Businesses"
    },
    {
      id: 9,
      name: "Organization",
      icon: <BriefCase className="" />,
      path: "organization",
    },
    {
      id: 10,
      name: "Loan Products",
      icon: <MoneyBag className="" />,
      path: "loan-products",
    },
    {
      id: 11,
      name: "Savings Products",
      icon: <SavingsProducts className="" />,
      path: "savings-products",
    },
    {
      id: 12,
      name: "Fees and Charges",
      icon: <Coins className="" />,
      path: "fees-charges",
    },
    {
      id: 13,
      name: "Transactions",
      icon: <Transaction className="" />,
      path: "transactions",
    },
    {
      id: 14,
      name: "Services",
      icon: <Galaxy className="" />,
      path: "services",
    },
    {
      id: 15,
      name: "Service Account",
      icon: <UserCog className="" />,
      path: "service-account",
    },
    {
      id: 16,
      name: "Settlements",
      icon: <Scroll className="" />,
      path: "settlements",
    },
    {
      id: 17,
      name: "Reports",
      icon: <ChartBar className="" />,
      path: "reports",
    },
     {
        subheading: "Settings"
    },
       {
      id: 18,
      name: "Preferences",
      icon: <Slider className="" />,
      path: "preferences",
    },   {
      id: 19,
      name: "Fees and Pricing",
      icon: <BadgePercent className="" />,
      path: "fees-pricing",
    },   {
      id: 20,
      name: "Audits Logs",
      icon: <Clipboard className="" />,
      path: "audits-logs",
    },   {
      id: 21,
      name: "Systems Messages",
      icon: <Tire className="" />,
      path: "systems-messages",
    },

  ];

  export const bottomTabs = [{
    name: "Logout",
    icon: <SignOut className="" />,
    path: "/",
  },
  {
    name: "v1.2.0"
  }
];