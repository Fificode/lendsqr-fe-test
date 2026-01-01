import styles from "../../scss/dashboard/users/users.module.scss";
import tableStyles from "../../scss/dashboard/users/users.table.module.scss";
import UsersStats from "./users/UsersStats";
import type { userStats } from "../../types/userStats";
import UsersTable from "./users/UsersTable";
import { headers } from "../../utils/userTableHeaders";
import type { UserList } from "../../types/userLists";
import Ellipsis from "../../assets/images/ellipsis.svg?react";
import Pagination from "./users/Pagination";
import { usePagination } from "../../utils/custom-hooks/usePagination";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ViewIcon from "../../assets/images/view.svg?react";
import BlackListIcon from "../../assets/images/blacklist-user.svg?react";
import ActivateIcon from "../../assets/images/activate-user.svg?react";
import UsersFilter from "./users/UsersFilter";
import filterStyle from "../../scss/dashboard/users/users.filter.module.scss";
import { useClickOutside } from "../../utils/custom-hooks/useClickOutside";
import { createPortal } from "react-dom";
import { useUsers } from "../../store/queries/users";
import { userStatsData } from "../../utils/dummy-data/userStats";
import { format } from "date-fns";
import type { UserFilter } from "../../types/userFilter";

type UserRowRefs = {
  button: HTMLButtonElement | null;
  dropdown: HTMLDivElement | null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const renderRowUser = (
  item: UserList,
  openUserId: string | null,
  dropdownCoords: { top: number; left: number },
  onEllipsisClick: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void,
  onViewDetails: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void,
  dropdownRef: React.RefObject<HTMLDivElement | null>,
  elementRefs: React.RefObject<Record<string, UserRowRefs>>
) => {
  const statusClass =
    tableStyles[item?.status?.toLowerCase() as keyof typeof tableStyles];

  return (
    <tr key={item?.id}>
      <td className={`${tableStyles.td} ${tableStyles.company}`}>
        {item?.company}
      </td>

      <td className={`${tableStyles.td}  ${tableStyles.username}`}>
        {item?.username}
      </td>

      <td className={`${tableStyles.td} ${tableStyles.email}`}>
        {item?.email}
      </td>

      <td className={tableStyles.td}>{item?.phone}</td>

      <td className={tableStyles.td}>
        {format(new Date(item.date_joined), "MMM d, yyyy h:mm a")}
      </td>

      <td className={tableStyles.td}>
        <span className={`${tableStyles.status} ${statusClass}`}>
          {item?.status}
        </span>
      </td>

      <td className={`${tableStyles.td} ${tableStyles.ellipsis}`}>
        <button
          type="button"
          ref={(el) => {
            if (!elementRefs.current[item?.id]) {
              elementRefs.current[item?.id] = {
                button: null,
                dropdown: null,
              };
            }
            elementRefs.current[item?.id].button = el;
          }}
          onClick={(e) => onEllipsisClick(item?.id, e)}
        >
          <Ellipsis />
        </button>
      </td>
      {openUserId === item?.id &&
        createPortal(
          <div
            ref={(el) => {
              if (dropdownRef)
                (
                  dropdownRef as React.RefObject<HTMLDivElement | null>
                ).current = el;
              if (elementRefs.current[item?.id]) {
                elementRefs.current[item?.id].dropdown = el;
              }
            }}
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
              onClick={(e) => onViewDetails(e, item?.id)}
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
          </div>,
          document.body
        )}
    </tr>
  );
};

const EMPTY_FILTERS: UserFilter = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phone: "",
  status: "",
};

const Users = () => {
  const navigate = useNavigate();
  const { data: usersData, isLoading, isError, error } = useUsers();
  const [openUserId, setOpenUserId] = useState<string | null>(null);

  const [dropdownCoords, setDropdownCoords] = useState({
    top: 0,
    left: 0,
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const elementRefs = useRef<Record<string, UserRowRefs>>({});
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => setOpenUserId(null);
    // Listen to the window and the table container for scrolling
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [openUserId]);

  const handleEllipsisClick = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownCoords({
      top: rect.bottom,
      left: rect.left - 140,
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
  useClickOutside(
    () => {
      if (!openUserId) return [];

      const refs = elementRefs.current[openUserId];
      if (!refs) return [];

      return [refs.dropdown, refs.button];
    },
    Boolean(openUserId),
    () => setOpenUserId(null)
  );

  // List of organizations
  const organizations = useMemo<string[]>(() => {
    if (!usersData) return [];
    const names = usersData
      .map((user: UserList) => user.company)
      .filter(Boolean) as string[];

    return Array.from(new Set(names)).sort();
  }, [usersData]);

  const appliedFilters = useMemo(() => {
    return {
      ...EMPTY_FILTERS,
      ...Object.fromEntries(searchParams.entries()),
    } as UserFilter;
  }, [searchParams]);

  const filteredData = useMemo(() => {
    if (!usersData) return [];
    return usersData.filter((user: UserList) => {
      return (
        (!appliedFilters.organization ||
          user.company === appliedFilters.organization) &&
        (!appliedFilters.username ||
          user.username
            .toLowerCase()
            .includes(appliedFilters.username.toLowerCase())) &&
        (!appliedFilters.email ||
          user.email
            .toLowerCase()
            .includes(appliedFilters.email.toLowerCase())) &&
        (!appliedFilters.date ||
          user.date_joined.startsWith(appliedFilters.date)) &&
        (!appliedFilters.phone || user.phone.includes(appliedFilters.phone)) &&
        (!appliedFilters.status ||
          user.status.toLowerCase() === appliedFilters.status.toLowerCase())
      );
    });
  }, [usersData, appliedFilters]);

  const {
    currentPage,
    setCurrentPage,
    pages,
    totalPages,
    startIndex,
    endIndex,
  } = usePagination({ totalItems: filteredData.length, itemsPerPage: 10 });
  const paginatedData = filteredData?.slice(startIndex, endIndex);

  const handleApplyFilter = (draft: UserFilter) => {
    const cleanParams = Object.fromEntries(
      Object.entries(draft).filter(([, value]) => value !== "")
    );

    setSearchParams({ ...cleanParams, page: "1" });
    setIsFilterOpen(false);
  };

  const handleReset = () => {
    setSearchParams({ page: "1" });
    setIsFilterOpen(false);
  };

  return (
    <div style={{ position: "relative" }} className={styles.users_container}>
      <h1 className={styles.heading}>Users</h1>
      {/* Users Stats */}
      <section className={`${styles.user_stats_container} custom-scrollbar`}>
        {userStatsData?.map((user: userStats) => (
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
          <div
            ref={filterRef}
            className={`${filterStyle.filter} custom-scrollbar`}
          >
            <UsersFilter
              filters={appliedFilters}
              organizations={organizations}
              onClose={() => setIsFilterOpen(false)}
              onReset={handleReset}
              onApply={handleApplyFilter}
            />
          </div>
        )}
        <UsersTable
          headers={headers}
          data={paginatedData}
          openFilter={() => setIsFilterOpen((prev) => !prev)}
          renderRow={(item: UserList) =>
            renderRowUser(
              item,
              openUserId,
              dropdownCoords,
              handleEllipsisClick,
              handleViewDetails,
              dropdownRef,
              elementRefs
            )
          }
          isLoadingData={isLoading}
          isError={isError}
          error={error}
        />
      </section>
      {/* Pagination */}
      <section>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredData.length}
          totalPages={totalPages}
          pages={pages}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default Users;
