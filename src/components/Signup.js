import React from 'react';
import "./Signup.scss";

import NavBar from './NavBar';

const Signup = () => {
    return (
        <>
        <NavBar />
        <div>
            <h1>Sign Up Here!</h1>
            <br/>
            <form className='signup'>
                <div className="lefthalf">
                    <p>Username</p>
                    <input type='text' required pattern='[A-Za-z0-9]{15}'/>
                    <p>Password</p>
                    <input type='password' required/>
                    <p>First Name</p>
                    <input type='text' required/>
                    <p>Last Name</p>
                    <input type='text' required/>
                </div>
                <div className="righthalf">
                    <p>UMB ID</p>
                    <input type='number' required pattern='[0-9]{8}'/>
                    <p>Email</p>
                    <input type='email' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$'/>
                    <br />
                    <p>Phone</p>
                    <input type='number' required pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' maxLength='10'/>
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