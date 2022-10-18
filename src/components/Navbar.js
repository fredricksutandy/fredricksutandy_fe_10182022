import React from 'react'
import './Navbar.css';


const Navbar = ({setToken}) => {

  const logOutHandler = (e) => {
    setToken("")
    localStorage.clear()
  };
  return (
    <div className="navbar-container">
        <a href="/" className="brand">USER</a>
        <a href="/" className="logout" onClick={() => logOutHandler()}>LOG OUT</a>
    </div>
  )
}

export default Navbar