import axios from 'axios'
import {
    initContactsRequest,
    initContactsSuccess,
    initContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    delContactRequest,
    delContactSuccess,
    delContactError,
} from './contactsActions'
// import token from '../auth/authOperations';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'

const fetchContacts = () => async dispatch => {
    dispatch(initContactsRequest());
    await axios
        .get('/contacts')
        .then(({ data }) => dispatch(initContactsSuccess(data)))
        .catch(error => dispatch(initContactsError(error.massage)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => console.log(data) || dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.massage)));
};

const delContact = id => dispatch => {
    dispatch(delContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(delContactSuccess(id)))
        .catch(error => dispatch(delContactError(error.massage)));
};

const operations = {
    addContact,
    delContact,
    fetchContacts,
};

export default operations;
