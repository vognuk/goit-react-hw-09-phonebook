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

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1>Register</h1>

                <form
                    onSubmit={this.handleSubmit}
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
                            onChange={this.handleChange}
                        />
                    </label>

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
                    >Register
                    </Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
