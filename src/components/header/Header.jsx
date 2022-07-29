import React from 'react';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: '#D70F64' }}>
      <div className="container">
        {/* <img className="navbar-brand" src={Logo} style={{ width: '6%' }} /> */}
        <a href="/" className="navbar-brand">
          Burger Builder
        </a>
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
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
            <a className="nav-link" href="/feedback">
              Feedback
            </a>
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
