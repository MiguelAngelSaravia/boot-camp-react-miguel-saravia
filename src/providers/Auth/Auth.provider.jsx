import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, AUTH_STORAGE_PROFILE} from '../../utils/constants';
import {AuthContext} from '../Context/AuthContext';
import {storage} from '../../utils/storage';

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((profile) => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_PROFILE, profile);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.delete(AUTH_STORAGE_PROFILE);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated}}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;