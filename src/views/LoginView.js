import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authOperations } from '../redux/auth'
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
const LoginView = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

        onLogin({ name, email, password });

        setName('');
        setEmail('');
        setPassword('');
    };

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

                    />
                </label>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Enter
                    </Button>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
