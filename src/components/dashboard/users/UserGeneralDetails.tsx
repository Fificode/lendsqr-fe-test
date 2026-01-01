import { useOutletContext } from "react-router-dom";
import styles from "../../../scss/dashboard/users/user.general.details.module.scss"
import { UserInfoSection } from "./UserInfoSection";
import type { UserList } from "../../../types/userLists";

export const UserGeneralDetails = () => {
  const user = useOutletContext<UserList>();
  return (
    <div>
     <section className={styles.details_card}>
  <UserInfoSection 
    title="Personal Information" 
    items={[
      { label: "Full Name", value: user?.name },
      { label: "Phone Number", value: user?.phone },
      { label: "Email Address", value: user?.email },
      { label: "BVN", value: user?.BVN },
      { label: "Gender", value: user?.gender },
      { label: "Marital Status", value: user?.marital_status },
      { label: "Children", value: "None" },
      { label: "Type of Residence", value: user?.residence },
    ]} 
  />

  <UserInfoSection 
    title="Education and Employment" 
    items={[
      { label: "Level of Education", value: user?.education },
      { label: "Employment Status", value: user?.employment },
      { label: "Sector of Employment", value: user?.sector },
      { label: "Duration of Employment", value: user?.duration },
      { label: "Office Email", value: user?.office_email },
      { label: "Monthly Income", value: user?.monthly_income },
      { label: "Loan Repayment", value: user?.repayment },
    ]} 
  />
  <UserInfoSection 
    title="Socials" 
    items={[
      { label: "Twitter", value: user?.twitter },
      { label: "Facebook", value: user?.facebook },
      { label: "Instagram", value: user?.instagram },
    ]} 
  />
  {user?.guarantors?.map((guarantor, index) => (
  <UserInfoSection
    key={index}
   title={index === 0 ? "Guarantor" : ""}
    items={[
      { label: "Full Name", value: guarantor.name },
      { label: "Phone Number", value: guarantor.phone },
      { label: "Email Address", value: guarantor.email },
      { label: "Relationship", value: guarantor.relationship },
    ]}
  />
))}

 
</section>
    </div>
  );
};

export default UserGeneralDetails;
