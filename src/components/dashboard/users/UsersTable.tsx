import styles from "../../../scss/dashboard/users/users.table.module.scss";
import Filter from "../../../assets/images/filter.svg?react"


interface TableProps<T> {
  headers: { id: number; label: string }[];
  data: T[];
  openFilter: () => void;
  renderRow: (item: T, index: number) => React.ReactNode;
    isLoadingData?: boolean;
    isError?: boolean;
    error?: Error | null ;
}

const UsersTable = <T,>({
  headers,
  data,
  openFilter,
  renderRow,
    isLoadingData = false,
    isError,
    error
}: TableProps<T>) => {
 

  return (
    <div  className={`${styles.tableWrapper} custom-scrollbar`}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`${styles.th} ${
                    index === 0 ? styles.left : styles.center
                  }`}
                >
                    <div className={styles.thContent}>
                  <span>{header.label}</span>
                   {index !== headers.length - 1 && (
      <button onClick={openFilter} type="button" className={`${styles.filter_button} js-filter-button`}>
        <Filter className={styles.filter} />
      </button>
    )}
    </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {data?.length > 0 &&
              data?.map((item, index) =>
                renderRow(item, index)
              )}

            {isLoadingData && (
              <tr className={styles.loading_data_container}>
                <td colSpan={headers.length}>
                  <p>
                    Loading...
                  </p>
                </td>
              </tr>
            )}

            {isError && (
              <tr className={styles.error_container}>
                <td colSpan={headers.length}>
                  <p>
                     {error?.message ?? "Error..."}
                  </p>
                </td>
              </tr>
            )}

            {!isLoadingData && (!data || data.length === 0) && (
              <tr className={styles.data_not_found_container}>
                <td colSpan={headers.length} >
                  <p>
                    No data found
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
};

export default UsersTable;
