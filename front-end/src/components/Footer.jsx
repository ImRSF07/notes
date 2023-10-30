import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear().toString();

  return (
    <StyledFooter>
      <p>{`Hopla.Online©${currentYear}`}</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;

  p,
  a {
    font-size: 0.6rem;
    color: #676e92;
    text-transform: capitalize;
    padding-left: 1rem;
  }

  a {
    text-decoration: none;
    margin-left: 3.125rem;
  }
`;
