import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { ThemeProvider, useTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    wrap: {
        display: 'flex',
        margin: '0px  auto 0px 0px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },

    item: {
        margin: 'auto 15px auto 15px',
        color: '#fff',
    }
}));

const AuthNAv = () => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.wrap} maxWidth="lg">
                <NavLink
                    to='/register'
                    exact
                >
                    <Typography variant="h6" className={classes.link}>
                        <Link
                            className={classes.item}
                            component="button"
                            variant="h6"
                            color='initial'
                        >
                            Register
                            </Link>
                    </Typography>
                </NavLink>
                <NavLink
                    to='/login'
                    exact
                >
                    <Typography variant="h6" className={classes.link}>
                        <Link
                            className={classes.item}
                            component="button"
                            variant="h6"
                            color='initial'
                        >
                            Login
                        </Link>
                    </Typography>
                </NavLink>
            </Container>
        </ThemeProvider>
    );
};

export default AuthNAv;
