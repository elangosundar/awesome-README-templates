import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleIncrement = () => {
    setMenu(!menu)
    const navMenu = document.querySelector('.navbar-collapse');
    if (menu === true){
      navMenu.classList.add('show');
    } else {
      navMenu.classList.remove('show');
    }
  }

  return (
    <div className="main thememain-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light thememain-header">
          <Link to="/" className="navbar-brand" title="Awesome Github Profile">
            Awesome Github Profile  { menu }
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleIncrement}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link navbar-link" href="void" title="Awesome Github Profile"> Home  <span className="sr-only">(current)</span> </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link navbar-link" href="void" title="Find a profile"> Profile  <span className="sr-only">(current)</span> </Link>
              </li>
              <li className="nav-item">
                <a href="https://github.com/elangosundar/awesome-README-templates" className="nav-link navbar-link" target="_blank" title="ABout"> Github  <span className="sr-only">(current)</span> </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;
