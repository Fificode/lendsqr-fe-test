import React from 'react';
import ArrowBack from "../../../assets/images/arrow-left.svg?react"
import ArrowForward from "../../../assets/images/arrow-right.svg?react"
import styles from "../../../scss/dashboard/pagination.module.scss";
import ArrowDown from "../../../assets/images/arrow-down.svg?react"


interface PaginationProps {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  pages: (number | string)[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, totalItems, totalPages, pages, setCurrentPage 
}) => {
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination_container}>
        
        <p className={styles.info_text}>
          Showing 
          <span>{(currentPage - 1) * 10 + 1} <ArrowDown/> </span>
          out{" "}
          of {totalItems} 
        </p>

        <div className={styles.controls}>
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.page_btn}
          >
            <ArrowBack className={styles.icon} />
          </button>

          {/* Page Numbers */}
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={`${styles.page_number_btn} ${currentPage === page ? styles.active : ""}`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={styles.page_btn}
          >
            <ArrowForward className={styles.icon} />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Pagination;