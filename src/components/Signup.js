import React from 'react';

import "./Signup.scss";

const Signup = () => {
    return (
        <div>
            <h1>Sign Up Here!</h1>
            <form>
                <div className="lefthalf">
                    <p>Username</p>
                    <input type='text'/>
                    <p>Password</p>
                    <input type='password'/>
                    <p>First Name</p>
                    <input type='text'/>
                    <p>Last Name</p>
                    <input type='text'/>
                    <p>UMB ID</p>
                    <input type='number'/>
                    <p>Email</p>
                    <input type='email'/>
                    <br />
                </div>
                <div className="righthalf">
                    <p>Phone</p>
                    <input type='number'/>
                    <p>Dorm/Commute</p>
                    <input type='text'/>
                    <p>Debit/Credit Card</p>
                    <input type='number'/>
                    <p>Expiration Date</p>
                    <input type='number'/>
                    <p>CVC</p>
                    <input type='number'/>
                    <br />
                    <input type='submit'/>
                    <br />
                </div>
            </form>
        </div>
    )
}

export default Signup;