import { useSelector } from 'react-redux';

import { Contact } from 'components/ContactList/ContactItem';
import css from 'components/ContactList/ContactList.module.css';
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
