import React from 'react'
import "./Header.css"
import logo from '../Components/images/logo.svg'
function Header(){
    return(
        <div className='head-main'>
            <div>
                <img src={logo} alt=""/> 
            </div>
            <div className='history'>
                <h1>A history of everything you copy</h1>
                <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices</p>
            </div>
            <div className='butt'>
                <button className='ios'>Download for iOS</button>
                <button className='mac'>Download for Mac</button>
            </div>
        </div>
    )
}
export default Header