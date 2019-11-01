import React from 'react';
import "./Signup.scss";

import NavBar from './NavBar';

const Signup = () => {
    return (
        <>
        <NavBar />
        <div>
            <h1>Sign Up Here!</h1>
            <form className='signup'>
                <div className="lefthalf">
                    <p>Username</p>
                    <input type='text'/>
                    <p>Password</p>
                    <input type='password'/>
                    <p>First Name</p>
                    <input type='text'/>
                    <p>Last Name</p>
                    <input type='text'/>
                    
                </div>
                <div className="righthalf">
                    <p>UMB ID</p>
                    <input type='number' pattern="[0-9]{8}"required/>
                    <p>Email</p>
                    <input type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"required/>
                    <br />
                    <p>Phone</p>
                    <input type='number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required/>
                    <p>Dorm/Commute</p>
                    <select>
                    <option value="volvo">Dorm</option>
                    <option value="saab">Commute</option>
                    </select>
                    <br/>
                    <input type='submit'/>
                    <br />
                </div>
            </form>
        </div>
        </>
    )
}

export default Signup;