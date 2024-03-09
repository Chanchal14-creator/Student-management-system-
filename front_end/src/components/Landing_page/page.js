import React, { useState } from 'react';
import './page.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



function Landing() {
    const [backgroundcolor, setbackgroundcolor] = useState(' rgba(134, 89, 89, 0.523)')
    function colorchangehandler() {
        setbackgroundcolor('white');
    }
    return (
        <div className='box'>
            <div >
                <div className='users'>
                    <div style={{}} id="student"><a onclick={colorchangehandler} href="#">Student</a></div>
                    <div style={{ backgroundcolor }} id="Faculty"><a onclick={colorchangehandler} href="#">Faculty</a></div>
                </div>
            </div>
            <div>
                <div className='login_items'>
                    <div className='input-box'><input type="text" placeholder="username" required/><FaUser className='icon' /></div>
                    <div className='input-box'><input type="text" placeholder="password" required/><FaLock className='icon' /></div>
                    <div className='remember-forget'>
                        <div className='rm'><input type="checkbox" /><label>Remember me</label></div>
                        <a href="">forget password</a>
                    </div>

                        <button id="login_button" type="submit">Login</button>
                        <div className='register-link'>
                            <p>Dont't have an account ?<a href="#">Register</a></p>
                        </div>
                    

                </div>
            </div>
        </div>
    );
};
export default Landing;