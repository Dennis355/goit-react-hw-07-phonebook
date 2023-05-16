import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addContact, deleteContact, fetchContacts} from '../redux/contactOperations';

const initialState = 
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}

// export const fetchContacts = createAsyncThunk('allContacts', async () => {
//   return await allContact();
// });
// запрос на бек для всех контактов

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
  /// на что срабатывает
  // initialState: {
  //   // contacts: [],
  //   // contacts: [
  //   //   { id: 'id-1',name: 'Hermione Kline', number: '443-89-12' },
  //   //   { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
  //   //   { id: 'id-3',name: 'Annie Copeland', number: '227-91-26' },
  //   //   { id: 'id-5', name: 'Aline Copand', number: '227-96-26' },
  //   //   { id: 'id-6', name: 'Appolina Copander', number: '227-96-25' },
  //   //   { id: 'id-7', name: 'Nigera Coopera', number: '225-96-25' },
  //   //   { id: 'id-8', name: 'Regina Cobra', number: '25-96-25' },
  //   //   { id: 'id-9', name: 'Edena Kliente-Cobra', number: '125-96-25' },
  //   // ],
  

  //   contacts: {
  //     items: [],
  //     isLoading: false,
  //     error: null
  //   },
  //   filter: ""
  // },


 





// const handleFulfilled = 
const handleRejected = (state, action) => {
  state.error = action.payload;
};




const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
      state.error = null;
    })
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContacts.pending, state => {
      state.loading = false;
      state.error = null;
    })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContacts.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        state.error = null;
      })
      .addCase(removeContact.rejected, handleRejected );
  },
});












export const { addContact, fetchContacts, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
