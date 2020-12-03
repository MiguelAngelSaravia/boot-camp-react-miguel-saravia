import React, {useContext, useCallback, useState, createContext} from 'react';

import { AUTH_STORAGE_PROFILE, AUTH_STORAGE_AUTH } from '../../utils/constants';

const AuthContext = createContext({
    login: () => {},
    logout: () => {},
    authenticated: false
});

function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error(`Can't use "useAuth" without and AuthProvider`);
    }

    return context;
}

function AuthProvider({children}) {

    const [authenticated, setAuthenticated] = useState()

    const login = useCallback( (profile) => {
        setAuthenticated(true)
        localStorage.setItem(AUTH_STORAGE_PROFILE, JSON.stringify(profile));
        localStorage.setItem(AUTH_STORAGE_AUTH, authenticated);
    }, [])

    const logout = useCallback(() => {
        setAuthenticated(false)
        localStorage.removeItem(AUTH_STORAGE_PROFILE);
        localStorage.setItem(AUTH_STORAGE_AUTH, authenticated);
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, authenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth };
export default AuthProvider;