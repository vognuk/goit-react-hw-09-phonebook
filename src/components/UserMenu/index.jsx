import React from 'react'
import { connect } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import s from './UserMenu.module.css'
import { Button } from '@material-ui/core'

const styles = {
    avatar: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
    },
};

const UserMenu = ({ avatar, name, email, onLogout }) => {
    return (
        <div className={s.wrap}>
            {/* <div className={s.userBlock}> */}
            <span className={s.userName}>
                {name}
                {/* ({email}) */}
            </span>
            <img
                className={s.avatar}
                alt=""
                src={avatar}
                style={styles.avatar}
            />
            {/* </div> */}
            <Button
                className='s.button'
                type='button'
                onClick={onLogout}
                variant="contained"
                color="primary"
            >
                Logout
            </Button>
        </div >
    );
};

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    email: authSelectors.getUseremail(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = ({
    onLogout: authOperations.logOut,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);