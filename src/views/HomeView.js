import React from 'react'
import wellcomePicture from '../images/alf.png'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    picture: {
        width: '100px',
        margin: '15px auto 25px auto',
    },
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // marginTop: '20px',
    }

}));

const HomeView = () => {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h4" className={classes.title}>
                Wellcome to phonebook!
            </Typography>
            <img className={styles.picture} alt="Wellcome" src={wellcomePicture} />
        </Container>
    )
};

export default HomeView;
