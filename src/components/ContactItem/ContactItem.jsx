import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/slice';

import { Item, Name, Number } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <button onClick={() => dispatch(remove(id))} type="button">
        delete
      </button>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
