import React from 'react'
import "./Footer.css"
import image9 from '../Components/images/logo.svg'
import image10 from '../Components/images/icon-facebook.svg'
import image11 from '../Components/images/icon-instagram.svg'
import image12 from '../Components/images/icon-twitter.svg'
function Footer(){
    return(
        <div className='img-faq'>    
            <img className='imaa' src={image9} alt="" />
            <div className='img-faq2'>
                <div className='fpi'>
                    <div className='faq'>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='pri'>
                        <p>Privacy Policy</p>
                        <p>Press Kit</p>
                    </div>
                    <div className='ins'><p>Install Guide</p></div>
                </div>
                <div className='images'>
                    <img src={image10} alt="" />
                    <img src={image11} alt="" />
                    <img src={image12} alt="" />
                </div>
            </div>
            
        </div>
        
    )
}
export default Footer