import React from 'react'
import style from './login.module.css'

function Login() {

  const {loginpage, formsection} = style;

  return (
    <>
      <div class={loginpage}>
        <div class={"form-section"+' '+formsection}>
          <form>
            <h3>Log In</h3>
            <div class="mb-3">
              <label for="num" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="num" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label htmlfor="pass" class="form-label">Password</label>
              <input type="password" class="form-control" id="pass" />
            </div>
            <li><a href="">Forgotten Password?</a></li>
            <button type="submit" class="btn btn-primary form-control">Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login