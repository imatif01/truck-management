import React, { useState } from 'react';
import { StyledTable } from './Table.styles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Table = ({ columns, rowsData, noOverflow, rowsPerPage = 5, minWidth }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rowsData.length / rowsPerPage);

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = rowsData.slice(startIndex, startIndex + rowsPerPage);
  return (
    <>
      <StyledTable $minWidth={minWidth} $noOverflow={noOverflow}>
        <table>
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th key={index} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row?.map((cell, cellIndex) => (
                  <td key={cellIndex} data-label={columns[cellIndex]}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <IoIosArrowBack />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </StyledTable>
    </>
  );
};

export default Table;
