import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const obj = { email, password };
    //TODO: Implement login logic
    try {
      console.log("fetching data", );
      const res = await fetch("https://newsnestserver.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      console.log(data);

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

        <div>Don't have an account? <Link to='/register'>Sign Up</Link> </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login

