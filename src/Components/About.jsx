import React from 'react'
import "./About.css"
import image1 from '../Components/images/icon-blacklist.svg'
import image2 from '../Components/images/icon-text.svg'
import image3 from '../Components/images/icon-preview.svg'
import image4 from '../Components/images/logo-google.png'
import image5 from '../Components/images/logo-ibm.png'
import image6 from '../Components/images/logo-microsoft.png'
import image7 from '../Components/images/logo-hp.png'
import image8 from '../Components/images/logo-vector-graphics.png'
function About(){
    return(
        <div className='main'>
            <div className='super'>
                <h1>Supercharge your workflow</h1>
                <p>We've got the tools to boost your productivity</p>
            </div>
            <div className='all-img'>
                <div className='cps'>
                    <div className='img-create'>
                        <div className='img1' >
                            <img src={image1} alt="" />
                        </div>
                        <div className='create'>
                            <h2>Create blacklists</h2>
                            <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                        </div>
                    </div>
                    <div className='img-plain'>
                        <div className='img1'>
                            <img src={image2} alt="" />
                        </div>
                        <div className='plain'>
                            <h2>Plain text snippets</h2>
                            <p>Remove unwanted formatting from copied text for a consistent look.</p>
                        </div>
                    </div>
                    <div className='img-sneak'>
                        <div className='img1'>
                            <img src={image3} alt="" />
                        </div>
                        <div className='sneak'>
                            <h2>Sneak preview</h2>
                            <p>Quick preview of all snippets on your Clipboard for easy access</p>
                        </div>
                    </div>
                </div>
                <div className='img3'>
                    <div><img src={image4} alt="" /></div>
                    <div><img src={image5} alt="" /></div>
                    <div><img src={image6} alt="" /></div>
                    <div><img src={image7} alt="" /></div>
                    <div><img src={image8} alt="" /></div>
                </div>
                <div className='clip-butt'>
                    <div className='clipb'>
                        <h1>Clipboard for iOS and Mac OS</h1>
                        <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard</p>
                    </div>
                    <div className='butt'>
                        <button className='ios'>Download for iOS</button>
                        <button className='mac'>Download for Mac</button>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}
export default About