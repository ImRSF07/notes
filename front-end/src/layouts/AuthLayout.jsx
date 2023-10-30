import React from 'react';

import styled from 'styled-components';

import Footer from '../components/Footer';

const AuthLayout = ({ children, width }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper width={width}>{children}</ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default AuthLayout;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${(p) => (p.width ? p.width : '376px')};
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
