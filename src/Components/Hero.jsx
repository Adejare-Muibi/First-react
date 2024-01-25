import React from 'react'
import "./Hero.css"
import image1 from '../Components/images/image-computer.png' 
import image2 from '../Components/images/image-devices.png'
function Hero(){
    return(
        <div className='hero'>
            <div className='keep'>
                <h1>Keep track of your snippets</h1>
                <p>Clipboard Instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
            </div>
            <div className='img-quick'>
                <div className='img'>
                    <img src={image1} alt="" />
                </div>
                <div className='qei'>
                    <div className='quick'>
                        <h3>
                            Quick Search
                        </h3>
                        <p>
                            Easily search your snippets by content, category, web address, application, and more
                        </p>
                    </div>
                    <div className='icloud'>
                        <h3>Icloud Sync</h3>
                        <p>Instantly saves and syncs snippets across all your devices</p>
                    </div>
                    <div className='comp'>
                        <h3>Complete History</h3>
                        <p>Retrieve any snippets from the first moment you started using the app</p>
                    </div>
                </div>
            </div>
            <div className='acc-img'>
                <div className='acc'>
                    <h1>Access Clipboard anywhere</h1>
                    <p>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few single clicks</p>
                </div>
                <div className='img2'>
                    <img src={image2} alt="" />
                </div>
            </div>

        </div>
        
    )
}
export default Hero