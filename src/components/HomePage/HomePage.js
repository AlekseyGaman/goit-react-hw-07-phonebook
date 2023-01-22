import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactsForm from '../ContactsForm/ContactsForm';
import { fetchContacts } from '../../redux/Operations';
// import Filter from '../Filter/Filter';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsForm />
      {/* <Filter /> */}
      {items.length > 0 ? (
        <ContactList
        // contacts={getFilterContsacts()}
        />
      ) : (
        <p>Contact list is empty.</p>
      )}
    </>
  );
};

export default HomePage;
