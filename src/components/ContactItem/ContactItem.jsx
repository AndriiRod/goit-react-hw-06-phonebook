import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/contacts/slice';

import {
  Item,
  Name,
  Number,
  Img,
  TextWrap,
  DeleteBtn,
  Icon,
} from './ContactItem.styled';

import placeholder from '../../images/placeholder.png';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Img src={placeholder} alt="avatar" />
      <TextWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </TextWrap>
      <DeleteBtn onClick={() => dispatch(remove(id))} type="button">
        <Icon />
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
