import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as selectors from '../redux/contacts/contactsSelectors'
import operations from '../redux/contacts/contactsOperations'
import Form from '../components/Form'
import Contacts from '../components/Contacts'
import Filter from '../components/Filter'
import Modal from '../components/Modal'
import { Button } from '@material-ui/core'

const ContactsView = ({
    initContacts,
    initialValue,
    filter,
    contacts,
    delContact }) => {

    const [showModal, setShowModal] = useState(false);

    const handleKeyDown = e => {
        if (e.code === "Escape") {
            setShowModal(false);
        }
    };

    useEffect(() => {
        initContacts();
        window.addEventListener("keydown", handleKeyDown);
    },
        [handleKeyDown, initContacts]
    );

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (<div>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <Button
                onClick={toggleModal}
                variant="contained"
                color="primary"
            >
                New contact
            </Button>
        </div>
        <br />
        <Filter
            value={initialValue}
            onChangeFilter={filter}
        />
        <Contacts
            contacts={contacts}
            onDelete={delContact}
        />

        <Fragment>
            {showModal &&
                <Modal
                    onClose={toggleModal}
                    closeModal={closeModal}
                >
                    <Form closeModal={closeModal} />
                </Modal>}
        </Fragment>
    </div>
    );
};

ContactsView.propTypes = {
    initialValue: PropTypes.string,
    onDelete: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

const mapStateToProps = state => {
    return {
        contacts: selectors.getFilteredContacts(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initContacts: () => dispatch(operations.fetchContacts()),
        delContact: id => dispatch(operations.delContact(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
