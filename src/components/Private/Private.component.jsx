import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {AUTH_STORAGE_KEY} from '../../utils/constants';
import {storage} from '../../utils/storage';

function Private({ children, ...rest }) {
    const authenticated = storage.get(AUTH_STORAGE_KEY);
  return (
    <Route 
        {...rest} 
        render={() => (authenticated ? children : <Redirect to="/" />)} 
    />
  );
}

export default Private;
