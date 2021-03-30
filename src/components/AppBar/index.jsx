import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from '../Navigation'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthHav'
import { authSelectors } from '../../redux/auth'

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
};

const AppBar = () => {
    const isAuthenticated = useSelector(state => authSelectors.getIsAuthenticated(state));
    return (
        < div style={styles.header} >
            <Navigation />
            { isAuthenticated ? (<UserMenu />) : (<AuthNav />)}
        </div >
    )
};

export default AppBar;
