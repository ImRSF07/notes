import React, { useState } from 'react';

import styled from 'styled-components';

import { FiInfo } from 'react-icons/fi';

const checkLevel = (level) => {
  switch (level) {
    case 1:
      return 'Weak';
    case 2:
      return 'Moderate';
    case 3:
      return 'Good';
    case 4:
      return 'Great';
    default:
      return 'zero';
  }
};

const PasswordValidator = ({ level }) => {
  const [showTooltip, setToolTip] = useState(false);
  const levelString = checkLevel(level);

  return (
    <StyledPasswordValidator>
      <div className='levels'>
        <span className={levelString}></span>
        <span className={levelString}></span>
        <span className={levelString}></span>
        <span className={levelString}></span>
      </div>
      <div className={`strenghtInput ${levelString}`}>{levelString}</div>
      <FiInfo onClick={() => setToolTip(!showTooltip)} className='infoIcon' />

      <div
        className={showTooltip ? 'tooltipContainer active' : 'tooltipContainer'}
      >
        <div className='tooltip'>
          <p>Password must at least be 8 characters long</p>
          <p>
            Passwords must contain both uppercase and lowercase characters
            (e.g., a-z and A-Z)
          </p>
          <p>Passwords must contain at least one number (e.g., 0-9)</p>
          <div className='tooltipAngle' />
        </div>
      </div>
    </StyledPasswordValidator>
  );
};

export default PasswordValidator;

const StyledPasswordValidator = styled.div`
  height: 2rem;
  width: 100%;
  padding: 0 0.8rem;
  margin-top: 0.55rem;
  position: relative;

  .levels {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4px;

    span {
      width: 100%;
      height: 4px;
      background: #e3e5ec;
      border-radius: 100px;

      &.Weak:first-child {
        background: #fd2055;
      }

      &.Moderate:first-child,
      &.Moderate:nth-child(2) {
        background: #ff961b;
      }

      &.Good:first-child,
      &.Good:nth-child(2),
      &.Good:nth-child(3) {
        background: #adc903;
      }

      &.Great {
        background: #55bd45;
      }
    }
  }

  .strenghtInput {
    margin: 0;
    padding: 0;
    font-size: 0.625rem;
    line-height: 0.75rem;
    margin-top: 0.625rem;

    &.Weak {
      color: #fd2055;
    }

    &.Moderate {
      color: #ff961b;
    }

    &.Good {
      color: #adc903;
    }

    &.Great {
      color: #adc903;
    }
  }

  .infoIcon {
    position: absolute;
    right: -0.5rem;
    top: 0.5rem;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #31374f;
    cursor: pointer;
  }

  .tooltipContainer {
    display: none;
    width: 100%;
    max-width: 300px;
    background: #fff;
    border: 0.5px solid #dcdee6;
    box-shadow: 3px 3px 10px #e8e9ee;
    border-radius: 1px;
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
      left: 10%;
      top: 100%;
      transform: translateY(0);
      z-index: 1;
    }

    &.active {
      display: block;
    }

    .tooltip {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1rem 1.5rem;
      transition: 0.3s ease-in-out all;

      .tooltipAngle {
        position: absolute;
        top: 45%;
        left: -1rem;
        transform: translateY(-50%) rotate(45deg);
        width: 1rem;
        height: 1rem;
        border-radius: 1px;
        background: #fff;
        border-left: 0.5px solid #dcdee6;
        border-bottom: 0.5px solid #dcdee6;

        @media (max-width: 768px) {
          top: -0.5rem;
          left: 99%;
          transform: translate(-50%, 0) rotate(45deg);
          border-bottom: none;
          border-top: 0.5px solid #dcdee6;
        }
      }

      p {
        text-align: left;
        letter-spacing: 0.02em;
        color: #31374f;
        font-size: 0.75rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-weight: 300;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
