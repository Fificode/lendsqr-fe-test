import styles from "../../../scss/dashboard/users/users.filter.module.scss";
import ArrowDown from "../../../assets/images/arrow-down.svg?react";
import Calendar from "../../../assets/images/calendar.svg?react"

type Props = {
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
};

const UsersFilter = ({ onReset, onApply }: Props) => {
  return (
    <div>
      {/* Organization */}
     <div className={styles.field}>
  <label>Organization</label>

  <div className={styles.selectWrapper}>
    <select>
      <option value="">Select</option>
      <option value="lendsqr">Lendsqr</option>
      <option value="irorun">Irorun</option>
    </select>
<ArrowDown className={styles.arrow}/>

  </div>
</div>


      {/* Username */}
      <div className={styles.field}>
        <label>Username</label>
        <input type="text" placeholder="User" />
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>

      {/* Date */}
      <div className={styles.field}>
        <label>Date</label>
        <div className={styles.dateInput}>
          <input type="date" />
          <Calendar className={styles.calendarIcon}/>
        </div>
      </div>

      {/* Phone */}
      <div className={styles.field}>
        <label>Phone Number</label>
        <input type="tel" placeholder="Phone Number" />
      </div>

      {/* Status */}
      <div className={styles.field}>
        <label>Status</label>
        <div className={styles.selectWrapper}>
        <select>
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blacklisted">Blacklisted</option>
          <option value="pending">Pending</option>
        </select>
        <ArrowDown className={styles.arrow}/>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.actions}>
        <button type="button" onClick={onReset} className={styles.reset}>
          Reset
        </button>
        <button type="button" onClick={onApply} className={styles.filterBtn}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default UsersFilter;
