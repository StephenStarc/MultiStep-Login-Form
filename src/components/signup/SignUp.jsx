import { useEffect, useState } from "react"
import Fieldset from "../fieldset/Fieldset"
import './signup.css'
export default function Signup({profileState}){

const [isBtndisabled,setIsBtnDisabled] = useState(true)
const [isFullName,setIsFullName] = useState('')
const [isphoneNo,setphoneNo] = useState('')
const [isEmail,setIsEmail] = useState('')
const [isPassword,setIsPassword] = useState('')
const [isAgency,setIsAgency] = useState(false)
const [isCompany,setIsCompany] = useState('')


useEffect(()=>{
    if(isFullName.length>=4 & isphoneNo.length>=4 & isPassword.length>=4 & isEmail.length>=4 & isAgency){
        setIsBtnDisabled(false)
    }else{
        setIsBtnDisabled(true)
    }
},[isEmail,isFullName,isphoneNo,isPassword,isAgency])


    return <>
    <div className="signup-wapper">
    <div className='form-home'>
        <h2 className="h2-signup">Create your <br></br>PopX account</h2>
        <Fieldset text={'Full Name'} type={'text'} placeholder={'Enter Full Nane'}  must={true} inputOnchange={setIsFullName}/>
        <Fieldset text={'Phone Number'} type={'text'} placeholder={'Enter Phone Number'} must={true} inputOnchange={setphoneNo}/>
        <Fieldset text={'Email Address'} type={'email'} placeholder={'Enter Email Address'} must={true} inputOnchange={setIsEmail}/>
        <Fieldset text={'Password'} type={'password'} placeholder={'Enter Password'} must={true} inputOnchange={setIsPassword}/>
        <Fieldset text={'Company Name'} type={'text'} placeholder={'Enter Company Name'} inputOnchange={setIsCompany}/>

        <p>Are you a Agency?<span className="must">*</span></p>

        <div className="radio-btn" onClick={()=> setIsAgency(true)}>
        <input type="radio" id="yes" value="HTML" name="agency"></input>
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" value="CSS" name="agency"></input>
        <label htmlFor="no">No</label>
        </div>
        
        
    </div>
        <div className='button-wrapper width'>
        <button className={`btn purple ${isBtndisabled ? 'disabledButton' : ""}`} onClick={profileState} disabled={isBtndisabled}>Create Account</button>
        </div>
    </div>
    </>
}