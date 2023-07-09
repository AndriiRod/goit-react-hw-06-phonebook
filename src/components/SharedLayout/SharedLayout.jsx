import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <section>
      <header>
        <nav>
          <NavLink to="/">Contacts</NavLink>
          <NavLink to="/addContact">Add New Contact</NavLink>
        </nav>
      </header>
      <Outlet />
    </section>
  );
};

export default SharedLayout;
