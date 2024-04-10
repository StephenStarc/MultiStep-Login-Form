import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Login from './components/logIn/Login'
import Signup from './components/signup/SignUp'
import Profile from './components/profile/Profile'

function App() {
  const [formState, setFormState] = useState('Home')

  function loginStateHandler(){
    setFormState('Login')
  }
  function SignupStateHandler(){
    setFormState('Signup')
  }
  function ProfileStateHandler(){
    setFormState('Profile')
  }


  return (
    <div className='container'>
      <div className='form-wrapper'>
      {formState === 'Home' && <Home loginState={loginStateHandler} signupState={SignupStateHandler}/>}
      {formState === 'Login' && <Login profileState={ProfileStateHandler}/>}
      {formState === 'Signup' && <Signup profileState={ProfileStateHandler}/>}
      {formState === 'Profile' && <Profile />}
      </div>
    </div>
  )
}

export default App

//Made by STARC - https://github.com/StephenStarc for Junior Web Developer/Associate JS developer role at Educase India