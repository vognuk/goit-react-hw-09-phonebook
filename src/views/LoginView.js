import React, { Component } from 'react'
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

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1>Login</h1>

                <form
                    onSubmit={this.handleSubmit}
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
                            onChange={this.handleChange}
                        />
                    </label>

                    <label style={styles.label}>
                        {/* Пароль */}
                        <TextField
                            type="password"
                            name="password"
                            value={password}
                            placeholder="password"
                            onChange={this.handleChange}

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
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
