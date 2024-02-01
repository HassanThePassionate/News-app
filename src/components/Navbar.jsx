import React from 'react'
import './navbar.css'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
     <header>
        <div className="container">

 
        <nav className="navbar">
    <div className="logo">
        <img src={Logo} alt="News-Gird" />
    </div>
    <div className="icons">
    <a href="http://facebook.com" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
        <a  href="http://twitter.com" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="http://instagram.com" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="http://youtube.com" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
    </div>
    <ul className='list'>

        <li></li>
        <li><a className='active' href="/">Home</a></li>
        <li><a href="/">About</a></li>
    </ul>
        </nav>
        </div>
        </header> 
    </>
  )
}

export default Navbar
