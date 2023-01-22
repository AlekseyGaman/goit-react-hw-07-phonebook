// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Operations';
import { ContactListUl, ContactLi } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);

  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactLi key={id}>
            <p>{name}:</p>
            <span>{number}</span>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Remove
            </button>
          </ContactLi>
        );
      })}
    </ContactListUl>
  );
}
