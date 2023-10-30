import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import { EmailInput, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import LinkItem from '../../components/LinkItem';

import { handlePostRequest } from '../../services/axios';

const Login = () => {
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
      const loggedIn = await handlePostRequest('/auth/login', request);
      localStorage.setItem(
        'auth_user',
        JSON.stringify(loggedIn?.data?.result[0])
      );
      navigate('/home');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
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
        Login
      </Button>
      <Button onClick={() => navigate('/register')} btnClass='success'>
        Create an account
      </Button>
      <LinkItem text='Forgot your password?' toUrl='/forgot-password' />
    </LoginContainer>
  );
};

const LoginContainer = styled.section`
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

export default Login;
