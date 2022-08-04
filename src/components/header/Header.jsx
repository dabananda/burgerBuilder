import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: '#D70F64' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          Burger Builder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

// const Header = args => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div style={{ background: '#D70F64', }}>
//       <Navbar {...args} dark container="md">
//         <NavbarBrand href="/">Burger Builder</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/home">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/burger-builder">Burger Builder</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/about">About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/feedback">Feedback</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/contact">Contact</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
