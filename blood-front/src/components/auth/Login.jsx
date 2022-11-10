import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";
import style from "./login.module.css";

function Login() {
  const { state, login } = useContext(AuthContext);
  const { loginpage, formsection } = style;

  const [formData, setFormData] = useState({});
  const { mobile, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobile === "" || password === "") {
      // setAlert("Please fill in all fields");
    } else {
      console.log(formData);
      login(formData);
    }
  };

  if (state.loading) {
    return <div>loading</div>;
  }

  if (state.isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div class={loginpage}>
        <div class={"form-section" + " " + formsection}>
          <form>
            <h3>Log In</h3>
            <div class="mb-3">
              <label htmlFor="num" class="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                class="form-control"
                name="mobile"
                id="num"
                aria-describedby="emailHelp"
                required="required"
                onChange={onChange}
              />
            </div>
            <div class="mb-3">
              <label htmlFor="pass" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                id="pass"
                required="required"
                onChange={onChange}
              />
            </div>
            <li>
              <a href="">Forgotten Password?</a>
            </li>
            <button type="submit" onClick={onSubmit} class="btn btn-primary form-control">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
