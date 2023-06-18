import PropTypes from 'prop-types';
import React from 'react'
// import ReactDOM from 'react-dom'
// import { removeContact } from 'redux/contactsSlice';
import { deleteContact } from '../../redux/contactOperations';

// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
// import css from '.ContactList.module.css';
import css from './ContactList.module.css';

export function Contact({ content, id }) {
  const dispatch = useDispatch();

  const onContactDelete = evt => {
    dispatch(deleteContact(evt.target.dataset.id));
  };

  return (
    <div className={css.contact_li}> 
      {content}{' '}
      <div className={css.contact_btndell} data-id={id} onClick={onContactDelete}>
        Delete
      </div>
      </div>
  );
}

Contact.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};