import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
// import defaultAvatar from '../../images/defaultAvatar.jpg'
// import s from './UserMenu.module.css'
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    wrap: {
        display: 'flex',
        marginLeft: 'auto',
    },
    nameWrap: {
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    small: {
        margin: '5px auto 5px auto',
        width: theme.spacing(4),
        height: theme.spacing(4),
        fontSize: '10px',
    },
    item: {
        whiteSpace: 'nowrap',
        margin: 'auto 0px auto 15px',
    },
    button: {
        padding: '0px 0px 0px 0px',
        margin: 'auto 0px auto 15px',
        backgroundColor: 'transparent'
    }
}));

const UserMenu = () => {
    const name = useSelector(state => authSelectors.getUsername(state));
    const dispatch = useDispatch();

    const theme = useTheme();
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.wrap}>
                <div className={classes.nameWrap}>
                    <Box
                        variant="h6"
                        className={classes.title}>
                        {name}
                    </Box>
                    <Avatar
                        className={classes.small}
                        alt={name} src='../../images/defaultAvatar.jpg'
                    />
                </div>
                <div className={classes.root}>
                    <Button
                        type='button'
                        onClick={() => dispatch(authOperations.logOut())}
                        variant="contained"
                        color="primary"
                    >
                        <ExitToAppIcon />
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default UserMenu;