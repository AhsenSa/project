import React from 'react';
import MapDraw from '../components/map';

import { useAuth0 } from '@auth0/auth0-react';
import Login from '../components/login';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <MapDraw /> : <Login />;
};

export default AuthenticationButton;