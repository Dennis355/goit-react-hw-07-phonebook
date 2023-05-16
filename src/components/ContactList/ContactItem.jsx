import PropTypes from 'prop-types';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from 'components/ContactList/ContactList.module.css';

export function Contact({ content, id }) {
  const dispatch = useDispatch();

  const onContactDelete = evt => {
    dispatch(removeContact(evt.target.dataset.id));
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