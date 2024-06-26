import React from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage(){
    return (
        <div className="login-page-wr">
            <div className="form-wr">
                <h2 className="heading-l">Login</h2>
                <form action="###">
                    <input type="email" className="login-input" placeholder="Email Address" />
                    <input type="password" className="login-input" placeholder="Password" />
                    <button type="submit" className="submit-btn">Login to your account</button>
                    <div className="signup-link-wr">
                        <p className="body-s">Don't have an account?</p>
                        <NavLink to="/signup">
                            <a href="" className="body-s">Sign Up</a>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}