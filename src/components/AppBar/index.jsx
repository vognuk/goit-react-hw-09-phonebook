import React from 'react'
import Navigation from '../Navigation'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthHav'
import { authSelectors } from '../../redux/auth'
import { connect } from 'react-redux'
// import s from './AppBar.module.css'

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
};

const AppBar = ({ isAuthenticated }) => (
    < div style={styles.header} >
        <Navigation />
        { isAuthenticated ? (<UserMenu />) : (<AuthNav />)}
    </div >
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
