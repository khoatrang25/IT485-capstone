import React from "react";
import "./modal.scss";

const Example = ({close}) => {
    return (
      <div class="modal" id="modal">
        <h2>Login Here!</h2>
        <p>Username</p>
        <input type='text'/>
        <p>Password</p>
        <input type='password'/>
        <br/>
        <button class="submit" onClick={() => close()}>
          Login
        </button>
        <br/>
        <button class="cancel" onClick={() => close()}>
          Cancel
        </button>
      </div>
      
    );
  }

export default Example;