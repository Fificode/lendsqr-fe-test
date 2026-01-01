import styles from "../../../scss/dashboard/users/users.filter.module.scss";
import ArrowDown from "../../../assets/images/arrow-down.svg?react";
import Calendar from "../../../assets/images/calendar.svg?react";
import type { UserFilter } from "../../../types/userFilter";
import { useState } from "react";

type Props = {
  onClose: () => void;
  onReset: () => void;
  onApply: (filters: UserFilter) => void;
  filters: UserFilter;
  organizations: string[];
};

const UsersFilter = ({ onReset, onApply, filters, organizations }: Props) => {
  const [draft, setDraft] = useState<UserFilter>(filters);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Organization */}
      <div className={styles.field}>
        <label>Organization</label>

        <div className={styles.selectWrapper}>
          <select
            name="organization"
            value={draft.organization}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {organizations.map((org) => (
              <option key={org} value={org}>
                {org.charAt(0).toUpperCase() + org.slice(1)}
              </option>
            ))}
          </select>
          <ArrowDown className={styles.arrow} />
        </div>
      </div>

      {/* Username */}
      <div className={styles.field}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="User"
          value={draft.username}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={draft.email}
          onChange={handleChange}
        />
      </div>

      {/* Date */}
      <div className={styles.field}>
        <label>Date</label>
        <div className={styles.dateInput}>
          <input
            type="date"
            name="date"
            value={draft.date}
            onChange={handleChange}
          />
          <Calendar className={styles.calendarIcon} />
        </div>
      </div>

      {/* Phone */}
      <div className={styles.field}>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={draft.phone}
          onChange={handleChange}
        />
      </div>

      {/* Status */}
      <div className={styles.field}>
        <label>Status</label>
        <div className={styles.selectWrapper}>
          <select name="status" value={draft.status} onChange={handleChange}>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blacklisted">Blacklisted</option>
            <option value="pending">Pending</option>
          </select>
          <ArrowDown className={styles.arrow} />
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.actions}>
        <button type="button" onClick={onReset} className={styles.reset}>
          Reset
        </button>
        <button
          type="button"
          onClick={() => onApply(draft)}
          className={styles.filterBtn}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default UsersFilter;
