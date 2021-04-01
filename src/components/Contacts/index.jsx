import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import s from './Contacts.module.css'
import ContactsAnimation from './ContactsAnimation.module.css'
import DeleteTwoTone from '@material-ui/icons/DeleteTwoTone'

const Contacts = ({ contacts, onDelete }) => {
    return (<div>
        <TransitionGroup
            component="ul"
            className={s.list}
        >
            {contacts.map((elem, id) => (
                <CSSTransition
                    key={id}
                    timeout={250}
                    classNames={ContactsAnimation}
                >
                    <li className={s.item} key={id}>
                        {`${elem.name}: ${elem.number}`}
                        <button
                            className={s.button}
                            onClick={() => onDelete(elem.id)}
                        >
                            <DeleteTwoTone
                                color="disabled"
                            />

                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </div>
    );
};

Contacts.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

export default Contacts;
