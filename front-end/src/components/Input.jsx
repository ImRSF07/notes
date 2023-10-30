import { useState, useEffect } from 'react';

import { FiMail, FiLock } from 'react-icons/fi';
import { styled } from 'styled-components';

import PasswordValidator from './PasswordValidator';

export const EmailInput = ({ value, onChange, title }) => {
  const [newInput, setInput] = useState(false);

  const handleInput = (e) => {
    if (e.target.value !== '') {
      setInput(true);
    } else {
      setInput(false);
    }
    onChange(e.target.value);
  };

  useEffect(() => {
    value !== '' && setInput(true);
  }, []);

  return (
    <StyledInput error>
      <FiMail className='icon' />
      <input value={value} onChange={handleInput} id='text1' type='email' />
      <label className={newInput ? 'active' : ''} htmlFor='text1'>
        {title}
      </label>
    </StyledInput>
  );
};

export const PasswordInput = ({ title, onChange, value, noValidation }) => {
  const [newInput, setInput] = useState(false);
  const [show, setShow] = useState(false);
  const [level, setLevel] = useState(0);
  const [updated, setUpdated] = useState(false);
  const [state, setState] = useState({
    password: '',
    passwordLength: 0,
    containsNumber: 0,
    isUppercase: 0,
    containsAlphabet: 0,
  });

  // handle input change
  const handleInput = (e) => {
    const targetPassword = e.target.value;

    if (targetPassword !== '') {
      setInput(true);
    } else {
      setInput(false);
    }

    setState({
      password: targetPassword,
      passwordLength: targetPassword.length > 7 ? 1 : 0,
      containsNumber: targetPassword.match('^(?=.*[0-9])') ? 1 : 0,
      containsAlphabet: targetPassword.match('^(?=.*[a-zA-Z])') ? 1 : 0,
      isUppercase: targetPassword.match('^(?=.*[A-Z])') ? 1 : 0,
    });

    onChange(targetPassword);

    setUpdated(true);
  };

  // update strenght level
  useEffect(() => {
    setLevel(
      state.containsAlphabet +
        state.isUppercase +
        state.containsNumber +
        state.passwordLength
    );
    setUpdated(false);
  }, [updated]);

  return (
    <StyledInput error className='password'>
      <FiLock className='icon' />
      <input
        onChange={handleInput}
        value={value}
        id='text1'
        type={show ? 'text' : 'password'}
      />
      <label className={newInput ? 'active' : ''} htmlFor='text1'>
        {title}
      </label>
      <span onClick={() => setShow(!show)} className='choose'>
        {show ? 'Hide' : 'Show'}
      </span>
      {level > 0 && !noValidation ? <PasswordValidator level={level} /> : null}
    </StyledInput>
  );
};

const StyledInput = styled.div`
  max-width: 376px;
  width: 100%;
  height: 3rem;
  position: relative;
  border: 1px solid #aeb3c9;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2.5rem;

  .icon {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    font-size: 1rem;
    color: #606a93;
  }

  .choose {
    font-size: 0.625rem;
    font-weight: 600;
    color: #fd2055;
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 0.75rem;
    color: #000;
    padding: 0 2rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    border-radius: 100px;

    &:focus {
      color: #000;
      background-color: transparent;
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 3rem;
    transform: translateY(-50%);
    color: #31374f;
    transition: all 0.3s ease-in-out;
    font-size: 0.75rem;
  }

  &:hover,
  &:focus-within {
    border-color: #606a93;

    input {
      color: #000;

      &:not(:placeholder-shown) ~ label {
        color: #606a93;
        padding: 0 8px;
        background-color: #fff;
        top: 0;
        left: 1rem;
      }
    }

    label {
      color: #606a93;
      padding: 0 8px;
      background-color: #fff;
      top: 0;
      left: 1rem;
      font-size: 0.625rem;
    }
  }

  .active {
    color: #606a93;
    padding: 0 8px;
    background-color: #fff;
    top: 0;
    left: 1rem;
    font-size: 0.625rem;
  }
`;
