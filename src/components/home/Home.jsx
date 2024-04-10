import './home.css'

export default function Home({loginState,signupState}){
    return<>
    <div className="form-home-wrapper">
    <div className='form-home'>
        <h2 className='home-title'>Welcome to PopX</h2>
        <p className='text-clr-grey'>Lorem ipsum dolor sit amet,<br></br>
            consectetur adipiscing elit,</p>
        
        <div className='button-wrapper'>
        <button className="btn purple" onClick={signupState}>Create Account</button>
        <button className="btn white"onClick={loginState}>Already Registered? Login</button>
        </div>
        </div>
    </div>
    </>
}