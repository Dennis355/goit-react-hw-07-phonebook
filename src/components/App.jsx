import React from 'react';
import { Form } from './PhoneForm/PhoneForm';
import { Contacts } from './ContactList/ContactList';
import { Search } from './Filter/filter';
import { fetchContacts } from '../redux/contactOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchEvent(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Form />
      <Search />
      <Contacts> </Contacts>
    </>
  );
}
