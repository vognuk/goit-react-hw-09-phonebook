import React from 'react'
import { connect } from 'react-redux'
import wellcomePicture from '../images/alf.png'

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
    picture: {
        width: '70%',
        marginRight: '15px',
        marginLeft: '15px',
    },
};

const HomeView = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>
            Wellcome! {' '}
            <img style={styles.picture} alt="Wellcome" src={wellcomePicture} />
            {/* </span> */}
        </h1>
    </div>
);

const mapDispatchToProps = state => ({
    wellcomePicture: wellcomePicture,
});

export default connect(null, mapDispatchToProps)(HomeView);
