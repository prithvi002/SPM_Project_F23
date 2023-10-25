import React, {useState} from "react"
import './App.css';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass  ] = useState('');
    const [name, setName  ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} type="name" placeholder="Full Name" id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} type="password" placeholder="**********" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}