import './header.css';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const setToggle = () => {
      console.log('toggle');
      setExpanded(!expanded)
  }
  

  return (
    <div className='nav-header d-flex align-items-center text-light justify-content-between'>
      <div className='nav-header-container'>
        <Navbar collapseOnSelect expand="lg" className='w-100' onToggle={setToggle} id="headerNavbar">

          <Navbar.Brand href="#home">
            <div className='nav-logo d-flex align-items-center h-100'>
              <div className='logo-ellipse'>EM</div>
              <div className='logo-text'>Architect
                <div className='logo-back-ellipse'></div>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className={expanded? 'nav-bar-icon icon nav-hum-icon open': 'nav-bar-icon icon nav-hum-icon'} id="navToggler" >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>

              <NavDropdown title="Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Apartment </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Residence
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Landscapes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">Eg</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <button className='nav-login-btn'>Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>



      </div>

    </div>
  )
}

export default Header
