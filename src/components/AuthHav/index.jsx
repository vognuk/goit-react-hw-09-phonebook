import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'

const AuthNAv = () => {
    return (
        <div className={s.container}>
            <NavLink
                className={s.link}
                to='/register'
                exact
            // activeStyle={s.activeLink}
            >
                Register
        </NavLink>
            <NavLink
                className={s.link}
                to='/login'
                exact
            // activeStyle={s.activeLink}
            >
                Login
        </NavLink>
        </div>
    );
};

export default AuthNAv;
