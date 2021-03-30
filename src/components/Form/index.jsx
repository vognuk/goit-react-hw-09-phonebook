import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
// import Heading from '../Heading'
import NotificationNumberExist from '../NotificationNumberExist'
import Animation from '../NotificationNumberExist/Animation.module.css'
import s from './Form.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import validatePhoneNumber from '../../utils/validator'
import * as selectors from '../../redux/contacts/contactsSelectors'
import operations from '../../redux/contacts/contactsOperations'
import { Button, TextField } from '@material-ui/core'

const Form = ({ closeModal, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [sameContact, setSameContact] = useState(false);

  const contacts = useSelector(state => selectors.getAllContacts(state));
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    const contact = {
      name,
      number,
    };

    e.preventDefault();

    if (contacts.some(({ number }) => number === contact.number)) {
      setSameContact(true);
      setTimeout(() => {
        setSameContact(false);
      }, 500);
      return;
    }

    if (validatePhoneNumber(number) === true) {
      setName(name);
      setNumber(number);
      addContact(contact);
      setName('');
      setNumber('');
      closeModal();
    } else {
      alert("Enter correct number, please")
      // throwerror
    }
  };


  return (
    <>
      <div className="heading">
        {/* <Heading /> */}

        <CSSTransition
          in={sameContact}
          timeout={500}
          classNames={Animation}
          unmountOnExit
        >
          <NotificationNumberExist message="The contact is already exists." />
        </CSSTransition>
      </div>
      <form className={s.form}
        onSubmit={handleSubmit}
      >
        <label className={s.label}>
          {/* Name <span className={s.star}>&#42;</span> */}
          <TextField
            className={s.input}
            type='text'
            name='name'
            placeholder='Enter the name'
            value={name}
            onChange={handleChange}
            required
            variant="outlined"
          />
        </label>
        <label className={s.label}>
          {/* Number <span className={s.star}>&#42;</span> */}
          <TextField
            className={s.input}
            type='number'
            name='number'
            placeholder='+380'
            value={number}
            maxLength="13"
            onChange={handleChange}
            required
            variant="outlined"
          />
          <span className={s.rule}>
            {/* <span className={s.star}>&#42;</span> - obligatory fields. */}
          </span>
        </label>
        <button
          className={s.button}
          // onSubmit={Form.propTypes.checkContact} //?
          disabled={false}
        >
          <Button
            variant="contained"
            color="primary"
          >
            Add contact
              </Button>
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};

// const mapStateToProps = state => {
//   return {
//     contacts: selectors.getAllContacts(state),
//   }
// };

const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact) => dispatch(operations.addContact(contact)),
  }
};

export default connect(null, mapDispatchToProps)(Form);
