import { useEffect, useState } from "react"
import Fieldset from "../fieldset/Fieldset"
import './login.css'
export default function Login({profileState}){
    const [isBtndisabled,setIsBtnDisabled] = useState(true)
    const [isEmail,setIsEmail] = useState('')
    const [isPassword,setIsPassword] = useState('')

    //Email Validator
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email)
    }

   useEffect(()=>{
    if(isPassword.length >= 4 & validateEmail(isEmail)){
        setIsBtnDisabled(false)
    }else{
        setIsBtnDisabled(true)
    }
},[isEmail,isPassword])

    return <>
    <div className="login-wapper">
    <div className='form-home'>
        <h2 className="h2-signup">Signin to your<br></br>PopX account</h2>
        <p className='text-clr-grey'>Lorem ipsum dolor sit amet,<br></br>
            consectetur adipiscing elit,</p>
        <Fieldset text={'Email Address'} type={'email'} placeholder={'Enter Email Address'} inputOnchange={setIsEmail}/>
        <Fieldset text={'Password'} type={'password'} placeholder={'Enter Password'} inputOnchange={setIsPassword}/>
        <div className='button-wrapper'>
        <button className={`btn purple ${isBtndisabled ? 'disabledButton' : ""}`} onClick={profileState} disabled={isBtndisabled}>Login</button>
        </div>
        </div>
    </div>
    </>
}