import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authOperations } from '../redux/auth'
import { Button, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { ThemeProvider, useTheme } from '@material-ui/core/styles'

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        width: 320,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

const RegisterView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {

            case 'name':
                setName(value);
                break;

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
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container >
                <Typography
                    variant="h4"
                >
                    Register
                </Typography>

                <form
                    onSubmit={handleSubmit}
                    style={styles.form}
                    autoComplete="off"
                >
                    <label style={styles.label}>
                        {/* Имя */}
                        <TextField
                            type="text"
                            name="name"
                            value={name}
                            placeholder="name"
                            onChange={handleChange}
                        />
                    </label>

                    <label style={styles.label}>
                        {/* Почта */}
                        <TextField
                            type="email"
                            name="email"
                            value={email}
                            placeholder="e-mail"
                            onChange={handleChange}
                        />
                    </label>

                    <label style={styles.label}>
                        {/* Пароль */}
                        <TextField
                            type="password"
                            name="password"
                            value={password}
                            placeholder="password (at least 7 characters)"
                            onChange={handleChange}
                        />
                    </label>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Register
                    </Button>
                </form>
            </Container>
        </ThemeProvider>
    );
}

export default RegisterView;
