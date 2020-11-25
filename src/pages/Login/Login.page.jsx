import React from 'react';
import { useHistory } from 'react-router';

function Login() {
    const history = useHistory();
    const submitForm = (event) => {
        event.preventDefault();
        console.log(event);
        history.push('/home');
    }

    return (
        <section>
            <h1>Welcome</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>
                        <strong>username</strong>
                        <input required type="text" id="username" />
                    </label>
                </div>
                <div>
                    <label>
                        <strong>password</strong>
                        <input required type="password" id="password" />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default Login;
