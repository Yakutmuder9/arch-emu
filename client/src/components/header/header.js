import React from 'react'

const Header = () => {
  return (
    <div className='nav-header d-flex align-items-center bg-dark text-light justify-content-between'>
      <div className='nav-logo  align-items-center bg-primary h-100'>
        logo
      </div>
      <div className='nav-lists bg-warning'>
        <ul className='d-flex align-items-center'>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
      <div className='nav-login h-100'>
        <ul className='d-flex align-items-center'>
            <li>Eng</li>
            <li><button>Login</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
