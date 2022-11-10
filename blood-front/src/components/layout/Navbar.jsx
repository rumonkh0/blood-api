import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import AuthContext from "../../context/auth/authContext";

function Navbar() {
  const { state, logout } = useContext(AuthContext);
  const { menu, navitem, donate, btn1, active } = style;
  const { isAuthenticated, user } = state;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <div className={menu}>
      <div className={navitem}>
        <div>
          <ul>
            <li className={donate}>
              <Link to="/" className="btn1">
                DONATE
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link className={btn1}>
                <p>Hello, {user && user.data.name}</p>
              </Link>
            </li>
            <li>
              <Link to="/" className={[btn1, active].join(" ")} active>
                Home
              </Link>
            </li>
            <li>
              <Link className="btn1" to="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link className="btn1" onClick={onLogout} to="/login">
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    ///////////////////////////jkj
    // <>
    //   <li className="btn1">Hello {user && user.name}</li>
    //   <li>
    //     <Link className="btn1" to="/about">
    //       <p>About</p>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link className="btn1" onClick={onLogout} to="/login">
    //       <p>Logout</p>
    //     </Link>
    //   </li>
    // </>
  );

  const guestLinks = (
    <div className={menu}>
      <div className={navitem}>
        <div>
          <ul>
            <li className={donate}>
              <Link to="/" className="btn1">
                DONATE
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className={[btn1, active].join(" ")} active>
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="btn1">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/regester" className="btn1">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
}

export default Navbar;
