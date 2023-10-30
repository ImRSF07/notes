import React from 'react';

import AuthLayout from '../../layouts/AuthLayout';
import Register from './Register';

const RegisterWrapper = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};
 
export default RegisterWrapper;
