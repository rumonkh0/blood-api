import React from 'react'
import style from "./style.module.css"

function Navbar() {
  const { menu, navitem, donate, btn1, active } = style;

  const guestLinks = (
    <div className={menu}>
      <div className={navitem}>
        <div>
          <ul>
            <li className={donate}><a href="reg.html" className="btn1">DONATE</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#" className={[btn1, active].join(' ')} active>Home</a></li>
            <li><a href="#" className="btn1">Log In</a></li>
            <li><a href="#" className="btn1">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {guestLinks}
    </div>
  )
}

export default Navbar
