import React from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage(){
    return (
        <div className="login-page-wr">
            <div className="form-wr">
                <h2 className="heading-l">Sign Up</h2>
                <form action="###">
                    <input type="email" className="login-input" placeholder="Email Address" />
                    <input type="password" className="login-input" placeholder="Password" />
                    <input type="password" className="login-input" placeholder="Confirm Password" />
                    <button type="submit" className="submit-btn">Create an account</button>
                    <div className="signup-link-wr">
                        <p className="body-s">Already have an account?</p>
                        <NavLink to="/login">
                            <a href="" className="body-s">Login</a>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}