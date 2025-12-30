import styles from "../../../scss/dashboard/users.table.module.scss";
import Filter from "../../../assets/images/filter.svg?react"

interface TableProps<T> {
  headers: { id: number; label: string }[];
  data: T[];
  renderRow: (item: T, index: number, rowClass: string) => React.ReactNode;
  boxClassName?: string;
  //   isLoadingData?: boolean;
  //   isError?: boolean;
  //   error?: Error | null ;
}

const UsersTable = <T,>({
  headers,
  data,
  renderRow,
  //   isLoadingData = false,
  //   isError,
  //   error
}: TableProps<T>) => {
  return (
    <div className={`${styles.tableWrapper} custom-scrollbar`}>
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
      <button type="button" className="filter_button">
        <Filter className={styles.filter} />
      </button>
    )}
    </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {data.length > 0 &&
              data.map((item, index) =>
                renderRow(item, index, index !== headers.length + 1 ? styles.striped : "")
              )}

            {/* {isLoadingData && (
              <tr className="w-full h-full">
                <td colSpan={headers.length} className="text-center py-4">
                  <p className="flex justify-center items-center h-full">
                    Loading...
                  </p>
                </td>
              </tr>
            )} */}

            {/* {isError && (
              <tr className="w-full h-full">
                <td colSpan={headers.length} className="text-center py-4">
                  <p className="flex justify-center items-center h-full text-red-600">
                     {error?.message ?? "Error..."}
                  </p>
                </td>
              </tr>
            )} */}

            {/* {!isLoadingData && (!data || data.length === 0) && (
              <tr className="w-full h-full">
                <td colSpan={headers.length} className="text-center py-4">
                  <p className="flex justify-center items-center h-full">
                    No data found
                  </p>
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
    </div>
  );
};

export default UsersTable;
