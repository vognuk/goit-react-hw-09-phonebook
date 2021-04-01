import React from 'react'
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { authSelectors } from '../../redux/auth'
// import Heading from '../Heading'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        '& > *': {
            margin: theme.spacing(1),
        },
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

const Navigation = () => {
    const isAuthenticated = useSelector(state => authSelectors.getIsAuthenticated(state));
    const theme = useTheme();
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <NavLink
                className="s.link"
                to="/"
                exact
            >
                <HomeIcon className={classes.link} />
                <span role="img" aria-label="Иконка приветствия"></span>
            </NavLink>

            {isAuthenticated &&
                <NavLink
                    to="/contacts"
                    exact
                >
                    <Typography variant="h6" className={classes.link}>
                        <Link
                            className={classes.item}
                            component="button"
                            variant="h6"
                            color='initial'
                        >
                            Contacts
                        </Link>
                    </Typography>
                </NavLink>
            }
        </ThemeProvider >
    )
};

export default Navigation;
