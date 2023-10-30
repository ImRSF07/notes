import React from 'react';

import styled from 'styled-components';

export const Button = ({ onClick, children, mb, btnClass }) => {
  return (
    <StyledButton className={btnClass} mb={mb} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  background-color: #fd2055;
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 1rem;

  &.primary {
    color: #fff;
    background-color: #007bff;
  }

  &.success {
    color: #fff;
    background-color: #28a745;
  }
`;
