import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex justify-center items-center lg:justify-between">
        <Link to="/">
          <img src={Logo} alt='' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
