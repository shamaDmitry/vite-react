import React from 'react';

import './pagination.css'

const Pagination = ({ showPerPage, totalShows, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalShows / showPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
