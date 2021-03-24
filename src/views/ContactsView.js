import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as selectors from '../redux/contacts/contactsSelectors'
import operations from '../redux/contacts/contactsOperations'
import Form from '../components/Form'
import Contacts from '../components/Contacts'
import Filter from '../components/Filter'
import Modal from '../components/Modal'
import { Button } from '@material-ui/core'

class ContactsView extends Component {
    componentDidMount() {
        this.props.initContacts();
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    static propTypes = {
        onDelete: PropTypes.func,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
        // onClick: PropTypes.func.isRequired,
    };

    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
            this.setState({ showModal: false });
        }
    };

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {

            this.setState(({ showModal }) => ({
                showModal: !showModal,
            }));
        }
    };

    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        // const { contacts, name, number } = this.props;
        return (<div>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <Button
                    onClick={this.toggleModal}
                    variant="contained"
                    color="primary"
                >
                    New contact
            </Button>
            </div>
            <br />
            <Filter
                value={this.props.initialValue}
                onChangeFilter={this.props.filter}
            />
            <Contacts
                contacts={this.props.contacts}
                onDelete={this.props.delContact}
            />

            <Fragment>
                {this.state.showModal &&
                    <Modal
                        onClose={this.toggleModal}
                        closeModal={this.closeModal}
                    >
                        <Form closeModal={this.closeModal} />
                    </Modal>}
            </Fragment>
        </div>
        );
    };
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
