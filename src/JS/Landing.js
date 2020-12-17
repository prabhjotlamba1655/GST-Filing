import React from 'react'
import img1 from '../Media/banner2.png'
import '../CSS/Landing.css'


function Landing() {
    return (
        <div className="landing__gifleft">
            <div className="landing__head"> 
                <h1>GST Registration/Filing </h1>
            </div>

            <div className="landing__all">
                <div className="landing__gif">
                    <img src={img1} alt="" />
                </div>
                <div className="landing__text">

                    <div className="box">

                        <span id="1" className="question"> GST: A brief overview  <br /> </span>


                        <span className="answer"> The goods and services tax or more commonly known as GST is a 
                        tax based on destination which is levied on consumption of goods and services. Essentially 
                        what it means is, only addition of value will be taxed and the burden of tax is to be borne 
                        by the final consumer. To file GST we have to login GST. The government website or Portal GST 
                        is gst gov in. People who want to get their GST registration filed search for a good and experienced GST 
                        practitioner who can file their GST on a monthly basis. One needs to do registration of GST 
                        first and after that calculate GST return and complete the GST filling. <br/>
                        The GST aims to replace and discard the existing multiple taxes imposed by the central and state 
                        governments. The GST is meant to supplant a multitude of indirect taxes with a centralized tax and 
                        is therefore expected to reshape India’s behemoth economy. A 20 percent drop in the travel time in the
                         interstate movements has been one of the positive impacts of the GST.
                        </span> <br />
                        <a className="landing__link" target="_blank" href ='https://gstinsuvidhakendra.com/gst-filing'>
                            Get your GST Registration Online !!!  
                        </a>
                        <br /> <br />

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Landing
