import styles from "../../scss/dashboard/users/users.module.scss";
import tableStyles from "../../scss/dashboard/users/users.table.module.scss";
import UsersStats from "./users/UsersStats";
import { userStatsData } from "../../utils/dummy-data/userStats";
import type { userStats } from "../../types/userStats";
import UsersTable from "./users/UsersTable";
import { headers, data } from "../../utils/dummy-data/userList";
import type { UserList } from "../../types/userLists";
import Ellipsis from "../../assets/images/ellipsis.svg?react";
import Pagination from "./users/Pagination";
import { usePagination } from "../../utils/custom-hooks/usePagination";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewIcon from "../../assets/images/view.svg?react";
import BlackListIcon from "../../assets/images/blacklist-user.svg?react";
import ActivateIcon from "../../assets/images/activate-user.svg?react";
import UsersFilter from "./users/UsersFilter";

type UserRowRefs = {
  button: HTMLButtonElement | null;
  dropdown: HTMLDivElement | null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const renderRowUser = (
  item: UserList,
  rowClass: string,
  openUserId: string | null,
  dropdownCoords: { top: number; left: number },
  onEllipsisClick: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void,
  onViewDetails: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void,
  dropdownRef: React.RefObject<HTMLDivElement | null>,
  elementRefs: React.RefObject<Record<string, UserRowRefs>>
) => {
  const statusClass =
    tableStyles[item.status.toLowerCase() as keyof typeof tableStyles];

  return (
    <tr key={item.id} className={rowClass}>
      <td className={tableStyles.td}>{item.company}</td>

      <td className={tableStyles.td}>{item.username}</td>

      <td className={`${tableStyles.td} ${tableStyles.email}`}>{item.email}</td>

      <td className={tableStyles.td}>{item.phone}</td>

      <td className={tableStyles.td}>
        {new Date(item.date_joined).toLocaleDateString()}
      </td>

      <td className={tableStyles.td}>
        <span className={`${tableStyles.status} ${statusClass}`}>
          {item.status}
        </span>
      </td>

      <td className={`${tableStyles.td} ${tableStyles.ellipsis}`}>
        <button
          type="button"
          ref={(el) => {
            if (!elementRefs.current[item.id]) {
              elementRefs.current[item.id] = {
                button: null,
                dropdown: null,
              };
            }
            elementRefs.current[item.id].button = el;
          }}
          onClick={(e) => onEllipsisClick(item.id, e)}
        >
          <Ellipsis />
        </button>
      </td>
      {openUserId === item.id && (
        <div
          ref={dropdownRef}
          onClick={(e) => e.stopPropagation()}
          className={tableStyles.dropdown}
          style={{
            position: "fixed",
            top: dropdownCoords.top,
            left: dropdownCoords.left,
          }}
        >
          <button
            type="button"
            onClick={(e) => onViewDetails(e, item.id)}
            className={tableStyles.dropdownItem}
          >
            <ViewIcon /> View Details
          </button>
          <button type="button" className={tableStyles.dropdownItem}>
            <BlackListIcon /> Blacklist User
          </button>
          <button type="button" className={tableStyles.dropdownItem}>
            <ActivateIcon /> Activate User
          </button>
        </div>
      )}
    </tr>
  );
};

const Users = () => {
  const navigate = useNavigate();
  const [openUserId, setOpenUserId] = useState<string | null>(null);

  const [dropdownCoords, setDropdownCoords] = useState({
    top: 0,
    left: 0,
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Record<string, UserRowRefs>>({});

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const {
    currentPage,
    setCurrentPage,
    pages,
    totalPages,
    startIndex,
    endIndex,
  } = usePagination({ totalItems: 500, itemsPerPage: 10 });
  const paginatedData = userStatsData.slice(startIndex, endIndex);

  const handleEllipsisClick = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();

    setDropdownCoords({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX - 140,
    });

    setOpenUserId((prev) => (prev === id ? null : id));
  };

  const handleViewDetails = (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: string
  ) => {
    e.stopPropagation();
    navigate(`/dashboard/users/${userId}`);
    setOpenUserId(null);
  };

  //Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!openUserId) return;

      const refs = elementRefs.current[openUserId];
      if (!refs) return;

      if (
        refs.dropdown?.contains(e.target as Node) ||
        refs.button?.contains(e.target as Node)
      ) {
        return;
      }

      setOpenUserId(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openUserId]);

  return (
    <div style={{ position: "relative" }} className={styles.users_container}>
      <h1 className={styles.heading}>Users</h1>
      {/* Users Stats */}
      <section className={`${styles.user_stats_container} custom-scrollbar`}>
        {paginatedData.map((user: userStats) => (
          <UsersStats
            key={user.id}
            title={user.title}
            icon={user.icon}
            iconColor={user.iconColor}
            value={user.value}
          />
        ))}
      </section>
      {/* Users List */}
      <section className={styles.table_container}>
        {isFilterOpen && (
          <UsersFilter
            onClose={() => setIsFilterOpen(false)}
            onReset={() => console.log("reset")}
            onApply={() => console.log("apply filter")}
          />
        )}
        <UsersTable
          headers={headers}
          data={data}
          openFilter={() => setIsFilterOpen((prev) => !prev)}
          renderRow={(item, _index, rowClass) =>
            renderRowUser(
              item,
              rowClass,
              openUserId,
              dropdownCoords,
              handleEllipsisClick,
              handleViewDetails,
              dropdownRef,
              elementRefs
            )
          }
        />
      </section>
      {/* Pagination */}
      <section>
        <Pagination
          currentPage={currentPage}
          totalItems={500}
          totalPages={totalPages}
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default Users;
