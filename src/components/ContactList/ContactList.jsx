import { useSelector } from 'react-redux';
import React from 'react';
// import ReactDOM from 'react-dom'
// import { Contact } from 'components/ContactList/ContactItem';
import {Contact} from './ContactItem';
import css from './ContactList.module.css';
export function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filterValue);

  const getfilteredItems = () => {
    const filteredItems = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
      );
    });
    return filterValue ? filteredItems : contacts;
  };

  return (
    <ul className={css.contact_items}>
      {getfilteredItems().map(contact => {
        const { name, number, id } = contact;
        return (
          <Contact key={id} content={` ${name}: ${number}`} id={id}></Contact>
        );
      })}
    </ul>
  );
}
