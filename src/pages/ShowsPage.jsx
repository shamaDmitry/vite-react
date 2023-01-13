import React, { useState, useEffect, useCallback } from 'react';
import { getShowsByPageId } from '../services/tvService';
import BaseLayout from '../layouts/BaseLayout';

const ShowsPage = () => {
  const [pageId, setPageId] = useState(0);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShowsByPageId(pageId).then(res => {
      setShows(res)
    })
  }, [pageId]);

  return (
    <BaseLayout>
      <div>
        <h1>
          Shows:
        </h1>

        <p>
          pageId {pageId}
        </p>

        <button onClick={() => setPageId(prevState => prevState - 1)}>
          prev
        </button>

        <button onClick={() => setPageId(prevState => prevState + 1)}>
          next
        </button>

        {
          shows.map(show => {
            return (
              <div key={show.id} style={{ border: '1px solid #ccc', marginBottom: 20, padding: 10 }}>
                <h2>
                  {show.id} {show.name}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
              </div>
            )
          })
        }
      </div>
    </BaseLayout>
  );
}

export default ShowsPage;
