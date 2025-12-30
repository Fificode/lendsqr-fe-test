import styles from "../../../scss/dashboard/users/users.filter.module.scss";

type Props = {
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
};

const UsersFilter = ({ onReset, onApply }: Props) => {
  return (
    <div className={`${styles.filter} custom-scrollbar`}>
      {/* Organization */}
      <div className={styles.field}>
        <label>Organization</label>
        <select>
          <option value="">Select</option>
          <option value="lendsqr">Lendsqr</option>
          <option value="irorun">Irorun</option>
        </select>
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
          <span className={styles.calendarIcon} />
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
        <select>
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blacklisted">Blacklisted</option>
          <option value="pending">Pending</option>
        </select>
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
