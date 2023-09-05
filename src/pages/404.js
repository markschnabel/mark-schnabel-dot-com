import React from 'react';
import { Link } from 'gatsby';

import '../components/layout/layout.css';

const NotFoundPage = () => (
  <div className="text-center flex justify-center items-center flex-col h-screen">
    <h2
      className="font-black text-background text-center text-9xl my-5"
      style={{ 'text-shadow': '-2px 0 #aaa, 0 2px #aaa, 2px 0 #aaa, 0 -2px #aaa' }}
    >
      404
    </h2>
    <p className="text-3xl font-bold my-4">Whoops!</p>
    <p className="text-xl font-light italic">This website only has one page!</p>
    <Link to="/" className="text-accent text-xl">Click here to go back</Link>
  </div>
);

export default NotFoundPage;
