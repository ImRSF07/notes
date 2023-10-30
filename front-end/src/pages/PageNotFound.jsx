import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
    location.reload();
  };

  return (
    <StyledPageNotFound>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <h2>The page you are looking for does not exist.</h2>
      <button onClick={handleGoBack}>Back to Home</button>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h1,
  h2,
  h3 {
    margin: 0;
    line-height: 0.8;
  }

  h2,
  h3 {
    font-weight: 300;
    color: $light-text-color;
  }

  h1 {
    font-weight: 700;
    color: $dark-text-color;
    font-size: 8em;
  }

  h2 {
    margin: 30px 0;
  }

  h3 {
    font-size: 2.5em;
  }

  h4 {
    display: inline-block;
    margin: 0 15px;
  }

  button {
    background: transparent;
    border: 2px solid $light-text-color;
    color: $light-text-color;
    padding: 5px 15px;
    font-size: 1.25em;
    transition: all 0.15s ease;
    border-radius: 3px;
  }

  button:hover {
    background: $dark-text-color;
    border: 2px solid $dark-text-color;
    color: #111;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default PageNotFound;
