import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { toast } from 'react-toastify';

import { EmailInput, PasswordInput } from '../../components/Input';
import { Button } from '../../components/Button';
import LinkItem from '../../components/LinkItem';

import { handlePostRequest } from '../../services/axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChanged = (value) => {
    setEmail(value);
  };
  const handlePasswordChanged = (value) => {
    setPassword(value);
  };
  const handleConfirmPasswordChanged = (value) => {
    setConfirmPassword(value);
  };

  const handleSubmit = async () => {
    try {
      const request = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      await handlePostRequest('/auth/forgot-password', request);
      navigate('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <ForgotPasswordContainer>
      <h2>Forgot your password?</h2>
      <EmailInput
        title='Email'
        value={email}
        onChange={(e) => handleEmailChanged(e)}
      />
      <PasswordInput
        title='Password'
        value={password}
        onChange={(e) => handlePasswordChanged(e)}
      />
      <PasswordInput
        title='Confirm Password'
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChanged(e)}
      />
      <Button onClick={handleSubmit} btnClass='primary'>
        Reset Password
      </Button>
      <LinkItem text='Create an account here' toUrl='/register' />
      <LinkItem text='Already have an account? Login here' toUrl='/login' />
    </ForgotPasswordContainer>
  );
};

const ForgotPasswordContainer = styled.section`
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

export default ForgotPassword;
