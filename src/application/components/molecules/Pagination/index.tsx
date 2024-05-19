import React from 'react';
import Icon from '@mdi/react';
import { PaginationButton, PaginationContainer, PaginationInfo } from './styles';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <Icon path={mdiChevronLeft} size={1} />
      </PaginationButton>
      <PaginationInfo>{currentPage} / {totalPages}</PaginationInfo>
      <PaginationButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <Icon path={mdiChevronRight} size={1} />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
