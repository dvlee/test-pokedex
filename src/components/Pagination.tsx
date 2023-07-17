import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = getPageNumbers();

    return pageNumbers.map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className='pagination'>
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      {currentPage > 3 && (
        <>
          <button onClick={() => handlePageChange(1)}>1</button>
          <span className='ellipsis'>...</span>
        </>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages - 2 && (
        <>
          <span className='ellipsis'>...</span>
          <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
        </>
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
