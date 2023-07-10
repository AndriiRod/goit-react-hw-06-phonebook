import ContactItem from 'components/ContactItem/';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contacts/slice';
import { getFilter } from 'redux/filter/slice';

import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContact = () => {
    if (filter === '') {
      return contacts;
    }
    const formatFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) => {
      const formatName = name.toLowerCase().trim();
      return formatName.includes(formatFilter);
    });
  };

  const visibleContact = getVisibleContact();

  return (
    <>
      {visibleContact.length !== 0 && (
        <List>
          {visibleContact.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};
