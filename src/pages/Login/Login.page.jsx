import React, {useState} from 'react';
import { useHistory } from 'react-router';

import ServiceLogin from '../../mockLogin/Login.api'
import { useAuth } from '../../providers/Auth';

function Login() {
    const [userValue, setUserValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const {login} = useAuth();

    const handleUser = (e) => {
        setUserValue(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordValue(e.target.value);
    }

    const history = useHistory();
    const submitForm = (event) => {
        event.preventDefault();
        ServiceLogin(userValue, passwordValue).then(((resp) => {
            login(resp);
            history.push('/home');
        })).catch((e) => {
            console.log('error del mockup', e);
        });
    }

    return (
        <section>
            <h1>Welcome</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>
                        <strong>username</strong>
                        <input required type="text" id="username" value={userValue} onChange={(e) => handleUser(e)} />
                    </label>
                </div>
                <div>
                    <label>
                        <strong>password</strong>
                        <input required type="password" id="password" value={passwordValue} onChange={(e) => handlePassword(e)} />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default Login;
