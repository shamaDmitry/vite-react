//useCallback
//useMemo
//useId
//useContext

import React from 'react';
import { useState, useEffect } from 'react';
import { getShowsByPageId } from '../services/tvService';

import Pagination from '../components/Pagination/Pagination';

const GalleryPage = () => {
  const [pageId, setPageId] = useState(265); //265 max
  const [shows, setShows] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(10);

  useEffect(() => {
    getShowsByPageId(pageId).then(res => {
      setShows(res);
    })
  }, [pageId]);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Shows:</h1>

      <Pagination
        showPerPage={showsPerPage}
        totalShows={shows.length}
        paginate={paginate}
      />

      <div>
        page {pageId}

        {pageId <= 0 ? null : <button
          onClick={() => setPageId(prevState => prevState - 1)}
        >
          prev
        </button>}

        {shows.length ? <button
          onClick={() => setPageId(prevState => prevState + 1)}
        >
          next
        </button> : null}
      </div>

      {currentShows.map(show => {
        return (
          <div key={show.id}>
            <h3>
              {show.id} {show.name}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          </div>
        )
      })}
    </div>
  );
}

export default GalleryPage;
