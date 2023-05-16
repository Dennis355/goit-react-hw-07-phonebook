import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from 'components/PhoneForm/PhoneForm.module.css';
import { addContact } from 'redux/contactsSlice';

export function Form() {
  const nameId = nanoid();
  const phoneId = nanoid();
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const add = event => {
    event.preventDefault();

    const contact = {
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
      id: nanoid(),
    };

    const prevContacts = contacts.reduce((acc, contact) => {
      acc.push(contact.name, contact.number);
      return acc;
    }, []);

    if (prevContacts.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    if (prevContacts.includes(contact.number)) {
      alert(`Contact with number ${contact.number} already exists`);
      return;
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <div className={css.div_phonebook_full}>
      <section className={css.section_phonenumber}>
        <form onSubmit={add}>
          <section className={css.section_search_add}>
            <div className={css.phonebook_title}>
              <h2 className={css.phonebook_title_h2}> Phonebook </h2>
            </div>
            <div className={css.phonebook_block_search}>
              <label className={css.phonebook_block_title}>
                Name
                <input
                  className={css.input_search}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  id={nameId}
                  // value={name}
                  // onChange={handlerInputChange}
                />
              </label>
            </div>
          </section>
          <section className={css.section_phonenumber}>
            <label className={css.phonebook_block_title}>
              Number
              <input
                className={css.input_search}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                id={phoneId}
                // onChange={handlerInputChange}
                // value={number}
              />
            </label>
          </section>
          <button type="submit" className={css.phonebook_btn_addcontact}>
            Add contacts
          </button>
        </form>
      </section>
    </div>
  );
}
