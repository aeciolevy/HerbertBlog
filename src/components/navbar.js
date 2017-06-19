import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar navbar-custom navbar-fixed-top">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">...
      </button>
      <Link to="/" className="navbar-brand">HV</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/about"> Sobre </Link>
          </li>
          <li className="active">
            <Link to="/article"> Artigos </Link>
          </li>
          <li className="active">
            <Link to="/books"> Livros </Link>
          </li>
          <li className="active">
            <Link to="/album"> Mural </Link>
          </li>
          <li className="active">
            <Link to="/videos"> Videos </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;