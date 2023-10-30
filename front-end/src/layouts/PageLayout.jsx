import React, { useContext } from 'react';

import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileDropdown from '../components/ProfileDropdown';

import { ProfileDropdownContext } from '../context/ProfileDropdown';

const PageLayout = ({ children, width }) => {
  const { openProfileDropdown } = useContext(ProfileDropdownContext);

  return (
    <LayoutWrapper>
      <Navbar />
      {openProfileDropdown && <ProfileDropdown />}
      <ContentWrapper width={width}>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default PageLayout;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${(p) => (p.width ? p.width : '100vh')};
  margin: 0 auto;
  margin-top: 2rem;
  min-height: calc(100% - 142px);

  @media (max-width: 768px) {
    padding: 0 6%;
  }
`;

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
