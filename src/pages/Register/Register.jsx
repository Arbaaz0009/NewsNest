import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { AuthAction } from '../../store/auth';
import { useDispatch } from 'react-redux';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const obj = { name, email, password };

        try {
            const res = await fetch("https://newsnestserver.onrender.com/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });
            const data = await res.json();
            const name = data.user.name;
            const email = data.user.email;
            localStorage.setItem("Name", name);
            localStorage.setItem("Email", email);
            dispatch(AuthAction.login({ userName: name, email: email }));
            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='register'>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className="logo"><img src="./Logo.png" alt="" /></div>
                <div className="name">
                    <label htmlFor='name' className='Label'>
                        <p>Name</p>
                    </label>
                    <input type="text" name="name" id='name' required />
                </div>
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

                <div>Already have an account? <Link to='/login'>Login</Link> </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register
