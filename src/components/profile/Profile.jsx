import logo from '../../assets/logo.png'
import './profile.css'

export default function Profile(){
    return <>
    <div className="profile-wapper">
    <div className='profile-container'>
        <h3 className='margin-h3'>Account Settings</h3>
        <hr className='line'></hr>
        <div className="user-profile">
            <div className="user-image">
                <img src={logo} ></img>
            </div>
            <div className="user-detail">
                <p>Marry Doe</p>
                <p>Marry@Gmail.Com</p>
            </div>
        </div>
        <p className='profile-text'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam,</p>
        <hr className='dotted'></hr>
        </div>
        
    </div>
    </>
}