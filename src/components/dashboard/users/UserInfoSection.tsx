import styles from "../../../scss/dashboard/users/user.general.details.module.scss"

interface InfoItem {
  label: string;
  value: string | number | undefined;
}

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
}

export const UserInfoSection = ({ title, items }: InfoSectionProps) => {
  return (
    <div className={styles.info_section_wrapper}>
      {title && <h4 className={styles.section_title}>{title}</h4>}
      <div className={styles.info_grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.info_item}>
            <span className={styles.info_label}>{item.label}</span>
            <p className={styles.info_value}>{item.value || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};