import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo_purplepeople.png'
import './login.scss';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //Signed in
                const user = userCredential.user;
                navigate("/home");
                console.log(user);
            })
            .catch((error) => {
                const errCode = error.code;
                const errMessage = error.message;
                console.log(errCode, errMessage)
            })
    }
    return (
        <section className="login_page">
            <div className="login_page_logo_wrapper">
                <img src={logo} alt="" />
            </div>
            <form>
                <div className="login_page_form_group field">
                    <input
                        className="login_page_form_field"
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="email" class="form_label">Email</label>
                </div>

                <div className="login_page_form_group field">
                    <input
                        className="login_page_form_field"
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="password" class="form_label">Password</label>
                </div>

                <div className="login_page_button">
                    <button
                        onClick={onLogin}
                    >
                        <span class="text">Login</span>
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Login;