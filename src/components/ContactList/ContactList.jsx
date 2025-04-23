import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(
    (state) => state.contacts.items
  );
  const filter = useSelector((state) => state.filters.name);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={styles.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
      {visibleContacts.length === 0 && (
        <p>No contacts found.</p>
      )}
    </ul>
  );
};

export default ContactList;
