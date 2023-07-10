import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Section,
  Header,
  Nav,
  NavLinkWrap,
  Counter,
} from './SharedLayout.styled';
import { getContacts } from 'redux/contacts/slice';

const SharedLayout = () => {
  const contacts = useSelector(getContacts);
  return (
    <Section>
      <Header>
        <Nav>
          <NavLinkWrap to="/">
            Contacts <Counter>{contacts.length}</Counter>
          </NavLinkWrap>
          <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
        </Nav>
      </Header>
      <Outlet />
    </Section>
  );
};

export default SharedLayout;
