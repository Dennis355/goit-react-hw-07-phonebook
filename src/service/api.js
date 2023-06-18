import axios from 'axios';
const BASE_URL = 'https://645d550f250a246ae31d7382.mockapi.io';

export const allContakts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`);
  return;
};

export const addContact = async contact => {
  try {
    const response = await axios.post(
      'https://645d550f250a246ae31d7382.mockapi.io/contacts/',
      contact
    );
    console.log('Contact added:', response.data);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

export const allContact = async contact => {
  try {
    const response = await axios.post(
      'https://645d550f250a246ae31d7382.mockapi.io/contacts/'
    );
    console.log('Contact added:', response.data);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};
