import { createSlice} from '@reduxjs/toolkit';
import {addContact, deleteContact,  fetchContacts} from '../redux/contactOperations';




// const initialState = 
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }

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
// const handleRejected = (state, action) => {
//   state.error = action.payload;
// };


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});











// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     error: null,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//     .addCase(fetchContacts.pending, state => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(fetchContacts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.contacts = action.payload;
//       state.error = null;
//     })
//     .addCase(fetchContacts.rejected, handleRejected)
//     .addCase(addContact.pending, state => {
//       state.loading = false;
//       state.error = null;
//     })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.push(action.payload);
//         state.error = null;
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, state => {
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
//         state.error = null;
//       })
//       .addCase(deleteContact.rejected, handleRejected );
//   },
// });












// export const { addContact, fetchContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
