import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
}: UsePaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const setCurrentPage = (page: number | ((prev: number) => number)) => {
    const nextPage = typeof page === "function" ? page(currentPage) : page;

    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", nextPage.toString());
    setSearchParams(newParams);
  };

  const pages = useMemo(() => {
    const pagesArray: (number | string)[] = [];
    const sideNeighbors = 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pagesArray.push(i);
    } else {
      const startPage = Math.max(2, currentPage - sideNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + sideNeighbors);

      pagesArray.push(1);
      if (startPage > 2) pagesArray.push("...");

      for (let i = startPage; i <= endPage; i++) {
        pagesArray.push(i);
      }

      if (endPage < totalPages - 1) pagesArray.push("...");
      pagesArray.push(totalPages);
    }
    return pagesArray;
  }, [currentPage, totalPages]);

  return {
    currentPage,
    setCurrentPage, 
    totalPages,
    pages,
    startIndex: (currentPage - 1) * itemsPerPage,
    endIndex: Math.min(currentPage * itemsPerPage, totalItems),
  };
};
