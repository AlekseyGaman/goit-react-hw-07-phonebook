import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/Operations';
import {
  ContactsSpan,
  Form,
  InputBox,
  ContactsInput,
  SubmitButton,
} from './ContactsForm.styled';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const NameChange = event => {
    setName(event.currentTarget.value);
  };

  const NumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    const newContact = { id: nanoid(), name, number };
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form className="form" onSubmit={handelSubmit}>
      <InputBox>
        <ContactsInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={NameChange}
        />
        <ContactsSpan>Name</ContactsSpan>
      </InputBox>
      <InputBox>
        <ContactsInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={NumberChange}
        />
        <ContactsSpan>Number</ContactsSpan>
      </InputBox>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default ContactsForm;
