import React from 'react'
import './Footer.css'
const Footer = () => {

    // useEffect(() => {
    //     document.getElementsByTagName('div')[1].addEventListener('click', () => window.scroll(0, 0))
    // }, [])

    return (
        <div className="footerarea">
            <div onClick={() => window.scroll(0, 0)} className="footerarea__top">
                <p >Back to Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>test</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>test</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>test</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>test</span>
                </div>

            </div>
        </div>
    )
}

export default Footer
