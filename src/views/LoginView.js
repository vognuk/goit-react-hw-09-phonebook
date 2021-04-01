import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { authOperations } from '../redux/auth'
// import { notificationActions } from '../redux/notification'
import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const notification = useSelector(state => state.notification);
    // const authentication = useSelector(state => state.auth.isAuthenticated);
    const theme = useTheme();

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
        // handleError();
    };

    // const handleError = () => {
    //     let message = '';
    //     let error = '';

    //     console.log(authentication);

    //     // setTimeout(() => {
    //     if (email === '') {
    //         dispatch(notificationActions.errorPopup({ message: 'Wrong e-mail or password', error }));
    //     };
    //     // }, 250);
    // }

    return (
        <ThemeProvider theme={theme}>
            <Container className={styles.wrap}>
                <Typography
                    variant="h4"
                >
                    Login
                    </Typography>

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
            </Container>
        </ThemeProvider>
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

export default LoginView;

