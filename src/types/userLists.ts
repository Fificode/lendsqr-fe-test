export type UserStatus = "active" | "inactive" | "pending" | "blacklisted";

export interface UserList {
  BVN: string;
  company: string;
  date_joined: string;
  duration: number;
  education: string;
  email: string;
  employment: string;
  facebook: string;
  gender: string;
  guarantors: {
    name: string;
    email: string;
    phone: string;
    relationship: string;
  }[];
  id: string;
  instagram: string;
  marital_status: string;
  monthly_income: string;
  name: string;
  office_email: string;
  phone: string;
  repayment: string;
  residence: string;
  sector: string;
  status: string;
  twitter: string;
  username: string;
}


