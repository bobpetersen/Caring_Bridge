import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="GridHeader">
    <a id="home">
      <Link to="/dash">
        Home
      </Link>
    </a>
    <a id="site">
      <Link to="/site">
        Site Filter
      </Link>
    </a>
    <a id="profile">
      <Link to="/profile">
        Profile Filter
      </Link>
    </a>

  </div>
);

export default Nav;
