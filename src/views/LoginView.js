import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { connect } from 'react-redux'
import { authOperations } from '../redux/auth'
import { notificationActions } from '../redux/notification'
import { Button, TextField } from '@material-ui/core'

const styles = {
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};
const LoginView = ({ showNotification, authError, filter }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const notification = useSelector(state => state.notification);
    const authentication = useSelector(state => state.auth.isAuthenticated);
    // const

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        // setEmail('');
        // setPassword('');

        // handleError();
    };

    const handleError = () => {
        let message = '';
        let error = '';

        console.log(authentication);

        // setTimeout(() => {
        if (email === '') {
            dispatch(notificationActions.errorPopup({ message: 'Wrong e-mail or password', error }));
        };
        // }, 250);
    }

    // window.onerror = () => console.log("window.onerror");

    return (
        <div>
            <h1>Login</h1>

            <form
                onSubmit={handleSubmit}
                style={styles.form}
                autoComplete="off"
            >
                <label style={styles.label}>
                    {/* Почта */}
                    <TextField
                        type="email"
                        name="email"
                        value={email}
                        placeholder="e-mail"
                        onChange={handleChange}
                    // required
                    />
                </label>

                <label style={styles.label}>
                    {/* Пароль */}
                    <TextField
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={handleChange}
                    // required
                    />
                </label>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                // onClick={handleError}
                >
                    Enter
                    </Button>
            </form>
        </div>
    );
}

// const mapStateToProps = state => {
//     console.log(state.auth.error, state);
//     return {
//         notification: state.notification,
//         // authError: state.auth.error,
//         authentication: state.auth.isAuthenticated,
//     }
// };

// const mapDispatchToProps = {
//     onLogin: authOperations.logIn,
//     showNotification: notificationActions.errorPopup,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
export default LoginView;

