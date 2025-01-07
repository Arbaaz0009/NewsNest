import React, { startTransition, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { AuthAction } from '../../store/auth';
import { useDispatch } from 'react-redux';
const Login = () => {
  const navigate = useNavigate();
  let loginError = useRef();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const obj = { email, password };

    try {
      const res = await fetch("https://newsnestserver.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();


      const success = data.success;
      if (success) {

        const name = data.user.name;
        const email = data.user.email;
        const loginError = document.querySelector(".login-error");
        loginError.style.visibility = "visible";
        loginError.style.color = "green";
        loginError.textContent = `Login Successful,Welcome ${name}`;
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        dispatch(AuthAction.login({ userName: name, email: email }));
        setTimeout(() => {
          navigate("/");
        }, 1500);


      } else {
        startTransition(() => {
          const loginErrorElement = loginError.current;
          if (loginErrorElement) {
            loginErrorElement.style.visibility = "visible";
            loginErrorElement.style.color = "red";
            loginErrorElement.textContent = "Invalid Credentials, Please try again";
          }
        });

      }

    } catch (error) {
      console.log(error);

    }

  }
  return (
    <div className='login'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="logo"><img src="./Logo.png" alt="" /></div>
        <div className="email">
          <label htmlFor='email' className='Label'>
            <p>Email</p>
          </label>
          <input type="email" name="email" id='email' required />
        </div>
        <div className="password" >
          <label htmlFor='password' className='Label'>
            <p> Password</p>
          </label>
          <input type="password" name="password" id='password' required minLength="8" />
        </div>
        <div className="login-error" ref={loginError}></div>
        <div className="query_sec">
          <div>Don't have an account? <Link to='/register'>Sign Up</Link> </div>
          <Link style={{ visibility: "hidden" }}>Forgot Password?  </Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login

