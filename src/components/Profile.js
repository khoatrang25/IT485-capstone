import React, { useState } from "react";
import './Profile.scss'

import NavBar2 from './NavBar2';
import BookOwn from '../containers/BookOwn/BookOwn'

import avatar from '../img/avatar.png';

const Profile = () => {
  const [toggle , setToggle] = useState(false)
  //14 will come from backend
  //Update The Display of Profile
  const [profile, setProfile] = useState({phone: '1234235433', email: 'khoa@gmail.com'})
  //Update the state of the form
  const [profileForm, setProfileForm] = useState({phone: '', email: ''})

  const handleEdit = () => setToggle(!toggle)

  //changes the state of the form
  const onChange = (e) => {
    const updateProfile = {}
    updateProfile[e.target.name] = e.target.value
    setProfileForm({...profileForm,...updateProfile})
  }
  //change and update the actual profile
  const confirmBtn = () => {
    if (!profileForm.phone || !profileForm.email) {
      return null;
    }
    setProfile(profileForm)
    setToggle(false)
    setProfileForm({phone:'', email:''})
  }

  if (toggle) {
    return (
      <div>
      <NavBar2/>
      <div className="profile">
        <div className='left'>
          <img className="avatar" src={avatar} alt="avatar"></img>
          <h5>Name</h5>
        </div>
        <br/>
        <div className='phone'>
          <p>Phone</p>
          <input name='phone' type='text' placeholder='phone' onChange={onChange}/>
        </div>
          <br/>
        <div className='email'>
          <p>Email</p>
          <input name='email' type='email' placeholder='email' onChange={onChange}/>
        </div>
        <br/>
        <button onClick={confirmBtn}>Confirm</button>
        <br/>
        <button onClick={handleEdit}>Cancel</button>
      </div>
      <BookOwn/>
    </div>
    )
  }

  return (
    <div>
      <NavBar2/>
      <div className="profile">
        <div className='left'>
          <img className="avatar" src={avatar} alt="avatar"></img>
          {/* Name will need to pull from backend */}
          <h5>Name</h5>
        </div>
        <div className='phone'>
          <p>Phone</p>
          {profile.phone}
        </div>
        <br/>
        <div className='email'>
          <p>Email</p>
          {profile.email}
        </div>
        <br/>
        <button onClick={handleEdit}>Edit</button>
      </div>
      <BookOwn/>
    </div>
);
}

export default Profile;