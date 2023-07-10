import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  arrayContact: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Jacob Jones', number: '459-12-56' },
    { id: 'id-6', name: 'William Gilbert', number: '443-89-12' },
    { id: 'id-7', name: 'Christopher Sanchez', number: '645-17-79' },
    { id: 'id-8', name: 'Jimmy Berry', number: '227-91-26' },
    { id: 'id-9', name: 'Ramon Frazier', number: '459-12-56' },
    { id: 'id-10', name: 'John White', number: '443-89-12' },
    { id: 'id-11', name: 'Leonard Harris', number: '645-17-79' },
    { id: 'id-12', name: 'Sergio Schwartz', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        state.arrayContact.unshift(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },
    },
    remove(state, action) {
      state.arrayContact = state.arrayContact.filter(
        item => item.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const ContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.arrayContact;
export const { add, remove } = contactsSlice.actions;
