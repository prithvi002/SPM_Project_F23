import React, {useState} from "react"
import './App.css';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const isSubmitDisabled = () => {
        return !(
          isNameValid(name) &&
          email &&
          isPasswordValid(pass)
        );
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitDisabled()) {
            // Password does not meet the criteria
            // alert("Password does not meet the criteria.");
            return;
          }
        alert("User registered successfully!");
        console.log(name);
        console.log(email);
        props.onFormSwitch('homepage');
    }

    const isNameValid = (name) => {
        setNameError("");
        if (name.length < 3) {
            setNameError("Name must have at least 3 characters.");
            return false;
          }
        
          return true;
    }

    const isPasswordValid = (password) => {
        // Reset password error message
        setPasswordError("");
    
        // Check for at least 8 characters
        if (password.length < 8) {
          setPasswordError("Password must have at least 8 characters.");
          return false;
        }
    
        // Check for a mixture of uppercase and lowercase letters
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
          setPasswordError("Password must contain both upper and lower case letters.");
          return false;
        }
    
        // Check for a mixture of letters and numbers
        if (!/\d/.test(password)) {
          setPasswordError("Password must contain at least one number.");
          return false;
        }
    
        // Check for the inclusion of at least one special character
        if (!/[!@#?]/.test(password)) {
          setPasswordError("Password must include at least one special character (!@#?).");
          return false;
        }
    
        return true;
      };

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full Name" id="name" name="name" />
                {nameError && <p className="error-message">{nameError}</p>}
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}