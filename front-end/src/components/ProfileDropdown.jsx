import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

const ProfileDropdown = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth_user');
  };

  return ReactDOM.createPortal(
    <StyledDropdown>
      <a className='navbar__link' href='/forgot-password'>
        Reset Password?
      </a>
      <a className='navbar__link' href='/login' onClick={handleLogout}>
        Logout
      </a>
    </StyledDropdown>,

    document.getElementById('profile__dropdown')
  );
};

const StyledDropdown = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100px;
  gap: 1rem;
  padding: 0.5rem;
  width: 150px;
  border: 1px solid rgb(238, 238, 246);
  box-sizing: border-box;
  box-shadow: rgba(178, 178, 203, 0.2) 3px 3px 7px;
  position: absolute;
  right: 2%;
  top: 8%;
  justify-content: center;

  @media (max-width: 768px) {
    right: 8%;
  }

  .navbar__link {
    text-decoration: none;
  }
`;

export default ProfileDropdown;
