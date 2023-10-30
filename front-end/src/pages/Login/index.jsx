import React from 'react';

import AuthLayout from '../../layouts/AuthLayout';
import Login from './Login';

const LoginWrapper = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};
 
export default LoginWrapper;
