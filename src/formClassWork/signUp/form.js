import React, { useState, useEffect } from 'react'
import signupImage from './signupImage.jpg'
import './form.css';
import Home from './home';
// import { BsFillPersonFill } from "react-icons/bs";
// import signin from './signin';


const Form = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [cPassword, setCPassword] = useState('');
   const [showErrorMessage, setshowErrorMessage] = useState(false);
   const [cPasswordClass, setCPasswordClass] = useState('user-password');
   const [isCPasswordDirty, setisCPasswordDirty] = useState(false);
   const [flag, setFlag] = useState(false);
   const [home, setHome] = useState(true);
  //  const [signin, setSignin] = useState(true);

useEffect(()=>{
  if (isCPasswordDirty) {
    if (password === cPassword) {
      setshowErrorMessage(false);
      setCPasswordClass('user-password is valid')
    } else {
      setshowErrorMessage(true);
      setCPasswordClass('user-password is invalid')
    }
  }
}, [cPassword])

const handleCPassword = (e) => {
  setCPassword(e.target.value);
  setisCPasswordDirty(true)
}
 
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(!name || !email || !password){
      setFlag(true);
    }else{
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      setHome(home)

      console.log("saved in local storage");

      // setSignin(!signin);
    }
  }

  // const handleClick = ()=>{
  //   setSignin(!signin);
  // }
  
  return (
    <div>

      
      {home ? (

      <div className='general'>
        <form action="" onSubmit={handleSubmit}>
          
          <h1>Sign Up</h1>
          
          <input 
          autoFocus 
          placeholder='Username' 
          type="text" 
          className="user-input" 
          required
          onChange={(e)=> setName(e.target.value)}
          />
          
          
          <input 
          placeholder='Your Email' 
          type="email" 
          className="user-input" 
          required
          onChange={(e)=> setEmail(e.target.value)}
          />
          
          
          <input 
          placeholder='Password' 
          type="password" 
          className="user-password" 
          id='password'
          value={password}
          required
          onChange={(e)=> setPassword(e.target.value)}
          />
          
          
          <input 
          placeholder='Repeat Your Password' 
          type="password" 
          className={cPasswordClass} 
          id='confirm'
          value={cPassword}
          required
          onChange={handleCPassword}
          />


          {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
          
          
          <label className="checkbox"><input type='checkbox'  required/>I agree all statements in <a href='/'>Terms Of Service</a></label>
          
          
          <button onClick={handleSubmit} type='submit' aria-label='register'>Register</button>
        </form>
        
        <div>
           <img src={signupImage} alt='design'/>
           <p>I am already a member</p>
        </div>

        {flag && (
          <p className='alert' color='white'>Please Fill Every Field</p>
            
        )}
      
      </div>

      ): (
        <Home/>
      )}
    
    </div>
  )
}

export default Form