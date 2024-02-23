import React from "react";
import { styled } from "styled-components";

export const CustomPagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    cursor: pointer;
    padding: 5px;
    margin-right: 5px;
    user-select: none;
    font-size: 16px; /* Add font size as needed */
  }
`;

export const PaginationArrow = styled.div`
  font-size: 20px;
  color: #b7b7b7;
  font-weight: bold;
`;

const Pagination = ({ currentPage, totalPageCount, handlePageClick }) => {
  return (
    <CustomPagination>
      <span
        onClick={() => handlePageClick({ selected: currentPage - 1 })}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <PaginationArrow>{"<"}</PaginationArrow>
      </span>

      <span>
        {currentPage + 1} / {totalPageCount}
      </span>

      <span
        onClick={() => handlePageClick({ selected: currentPage + 1 })}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <PaginationArrow>{">"}</PaginationArrow>
      </span>
    </CustomPagination>
  );
};

export default Pagination;
