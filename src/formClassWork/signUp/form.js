import React from 'react'
import signupImage from './signupImage.jpg'
import './form.css';


const Form = () => {
  return (
    <div>
      <div className='general'>
        <form action="">
          <h1>Sign Up</h1>
          <input placeholder='Username' type="text" className="user-input"/>
          <input placeholder='Your Email' type="email" className="user-input"/>
          <input placeholder='Password' type="password" className="user-input"/>
          <input placeholder='Repeat Your Password' type="password" className="user-input"/>
          <label className="user-input"><input type='checkbox'/>I agree all statements in <a href='/'>Terms Of Service</a></label>
          <button>Register</button>
        </form>
        <div>
           <img src={signupImage} alt='design'/>
        </div>
      </div>
    </div>
  )
}

export default Form