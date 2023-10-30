import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import { EmailInput, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import LinkItem from '../../components/LinkItem';

import { handlePostRequest } from '../../services/axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChanged = (value) => {
    setEmail(value);
  };
  const handlePasswordChanged = (value) => {
    setPassword(value);
  };
  const handleSubmit = async () => {
    try {
      const request = {
        email: email,
        password: password,
      };
      await handlePostRequest('/auth/register', request);
      navigate('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <EmailInput
        title='Email'
        value={email}
        onChange={(e) => handleEmailChanged(e)}
      />
      <PasswordInput
        noValidation
        title='Password'
        value={password}
        onChange={(e) => handlePasswordChanged(e)}
      />
      <Button onClick={handleSubmit} btnClass='primary'>
        Register
      </Button>
      <LinkItem text='Forgot your password?' toUrl='/forgot-password' />
    </RegisterContainer>
  );
};

const RegisterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
    color: #31374f;
    margin-bottom: 1.5rem;
  }
`;

export default Register;
