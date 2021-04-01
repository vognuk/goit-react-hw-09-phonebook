import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthHav'
import { authSelectors } from '../../redux/auth'
import AppBarStyle from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0px 0px 0px 0px ',
        padding: '5px 0px 5px 0px'
    }
}));

const AppBar = () => {
    const isAuthenticated = useSelector(state => authSelectors.getIsAuthenticated(state));
    const theme = useTheme();
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBarStyle position="static">
                <Toolbar>
                    <Navigation />
                    {isAuthenticated ?
                        <UserMenu />
                        :
                        <AuthNav />}
                </Toolbar>
            </AppBarStyle>
        </ThemeProvider>
    )
};

export default AppBar;
