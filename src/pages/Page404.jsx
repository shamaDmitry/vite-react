import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to={'/'}>back home</Link>
    </div>
  );
}

export default Page404;
