import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import s from './Filter.module.css'
import PropTypes from 'prop-types'
import * as selectors from '../../redux/contacts/contactsSelectors'
import * as action from '../../redux/contacts/contactsActions'
import { TextField } from '@material-ui/core'

const Filter = () => {
  const initialValue = useSelector(state => selectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <div >
        <TextField
          className={s.input}
          type='text'
          name='filter'
          placeholder='Find contacts by name'
          value={initialValue}
          onChange={e => dispatch(action.changeFilter(e.target.value))}
          variant="outlined"
        ></TextField>
      </div>
    </label >
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.func,
};

export default Filter;
