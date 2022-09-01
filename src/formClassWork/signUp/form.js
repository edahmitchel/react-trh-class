import React from 'react'
import signupImage from './signupImage.jpg'
import './form.css';


const Form = () => {
  return (
    <div>
      <div className='general'>
        <form action="">
          <h1>Sign Up</h1>
          <input autoFocus placeholder='Username' type="text" className="user-input" required/>
          <input placeholder='Your Email' type="email" className="user-input" required/>
          <input placeholder='Password' type="password" className="user-input" required/>
          <input placeholder='Repeat Your Password' type="password" className="user-input" required/>
          <label className="user-input"><input type='checkbox' required/>I agree all statements in <a href='/'>Terms Of Service</a></label>
          <button type='submit'>Register</button>
        </form>
        <div>
           <img src={signupImage} alt='design'/>
           <a href='/'><p>I am already a member</p></a>
        </div>
      </div>
    </div>
  )
}

export default Form