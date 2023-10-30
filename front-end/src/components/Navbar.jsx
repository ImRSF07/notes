import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

import { ProfileDropdownContext } from '../context/ProfileDropdown';

import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const { handleToggleProfileDropdown } = useContext(ProfileDropdownContext);

  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <section className='navbar__company-logo'>
        <img src={logo} className='logo' onClick={() => navigate('/home')} />
      </section>

      <section className='navbar__links'>
        <FaUserAlt
          className='navbar__icon'
          onClick={handleToggleProfileDropdown}
        />
      </section>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding: 0 2rem;

  .navbar__links {
    display: flex;
  }

  .navbar__icon {
    font-size: 30px;
    cursor: pointer;
  }

  .logo {
    cursor: pointer;
  }
`;
