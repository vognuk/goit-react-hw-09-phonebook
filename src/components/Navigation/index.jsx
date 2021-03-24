import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authSelectors } from '../../redux/auth'
import Heading from '../Heading'
// import s from './Navigation.module.css'

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <NavLink
            className="s.link"
            to="/"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}>
            {/* Главная */}
            <Heading />
            <span role="img" aria-label="Иконка приветствия"></span>
        </NavLink>
        {isAuthenticated &&
            <NavLink
                to="/contacts"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Contacts
            </NavLink>
        }
    </nav>
);

const mapStateToProps = state => {
    return {
        isAuthenticated: authSelectors.getIsAuthenticated(state),
    }
};

export default connect(mapStateToProps)(Navigation);
