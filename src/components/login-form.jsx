import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    //Function to validate email
    const validateEmail = (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    // This function adds a user to the local storage and redirects to the main page
    const login = (e) => {
        e.preventDefault();
        console.log(email, password);

        const user = {
            email: email,
            password: password
        }

        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    }

    return (<>
        <div className="form-container">
            <div className="form-content">
                <div className="form-description">
                    <h2>Welcome!</h2>
                    <p>
                        Discover the full range of fruits available on our website by signing in to your account. Gain access to detailed information and explore our extensive selection of fresh, delicious fruits.
                    </p>
                </div>
                <form onSubmit={login}>
                    <div>
                        <p>Email</p>
                        <input type="email" placeholder="test@example.com" value={email} onChange={(e) => {
                            validateEmail(e.target.value);
                            setEmail(e.target.value);
                        }} required />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>

    </>);
}

export default LoginForm;
