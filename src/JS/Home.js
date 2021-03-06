import React, { useState } from 'react'
import '../CSS/Home.css'
import Button from '@material-ui/core/Button';
import InputField from './InputField';
import Landing from './Landing';
import Landing2 from './Landing2';
import { db } from "./firebase.js";
import { useHistory } from 'react-router-dom'
import img1 from '../Media/fssai.jpg'
import img2 from '../Media/gst.jpg'
import img5 from '../Media/msme.jpg'
import img9 from '../Media/pan.jpg'
import img10 from '../Media/ewaybill.jpg'


function Home() {

    const history = useHistory();
    const inputRefs = React.useRef([
        React.createRef(), React.createRef() ,React.createRef()
    ]);
   
    const [data, setData] = React.useState({});

    const [option, setoption] = useState("");



    const handleChange = (name, value) => {
        setData(prev => ({ ...prev, [name]: value }))
    }
    const submitForm = (e) => {
        e.preventDefault();

        let isValid = true;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate()
            console.log(valid)
            if (!valid) {
                isValid = false
            }
        }


        if (!isValid) {
            return
        }


        db.collection("Info")
            .add({
                name: data.name,
                number: data.number,
                email: data.email,
                option: option,
                timestamp: new Date().getTime(),
            })
            .then(() => {
                alert("Info Saved");
                history.replace("/thankyou");
            })
            .catch((error) => {
                alert(error.message);
            });

            setoption("");
    }


    return (
        <div className="home">

            <div className="home__form__services">


                <div id="registerform" className="home__left">


                    <span className="home__tagline"> Register Here </span>
                    <span className="home__para">Best GST filing Package <br /></span>

                    <span className="home__para">Offer valid for today only <br /></span>

                    <div  className="home__outterform">
                        <form onSubmit={submitForm} className="home__form">

                            <h2>Hurry up!!! Get 10% Discount </h2>
                            <InputField
                                ref={inputRefs.current[0]}
                                name="name"
                                label="Name*:"
                                onChange={handleChange}
                                validation={"required"}
                            />

                            <InputField
                                ref={inputRefs.current[1]}
                                name="email"
                                label="Email*:"
                                validation="required"
                                onChange={handleChange}
                            />

                            <InputField
                                ref={inputRefs.current[2]}
                                name="number"
                                label="Phone Number*:"
                                validation="required|min:10|max:10"
                                onChange={handleChange}
                            />
                            <label for="service-select" className="label_of_service">Choose a service:</label>

                                <select onChange={(e) => setoption(e.target.value)} name="services" id="service-select" >
                                   <option value="" > Choose a service</option >
                                   <option value="GST" >GST</option>
                                   <option value="FSSAI">FSSAI</option>
                                   <option value="MSME/UDYAM" >MSME/UDYAM</option>
                                   <option value="E-Way Bill" >E-Way Bill</option>
                                   <option value="PAN Card" >PAN Card</option>
                                </select >
                            <Button type="submit" className="home__button">Submit</Button>
                        </form>
                    </div>

                </div>


                <div className="home__ourservices">
                    <div className="home__tagline">
                        <span> Our Services </span>
                    </div>

                    <div className="home__imgservices">

                            <div className="home__img">
                                <a className="home__img" target="_blank"  rel="noreferrer" href ='https://gstinsuvidhakendra.com/gst-filing' >
                                    <img src={img2} alt="gst" />
                                    <span className="home__tag">GST</span>
                                </a>
                                    <span className="home__img__para">One Nation One Tax One Market!</span>
                            </div>

                            <div className="home__img">
                                <a className="home__img" target="_blank"  rel="noreferrer" href ='https://gstinsuvidhakendra.com/fssai' >
                                    <img src={img1} alt="fssai" />
                                    <span className="home__tag">FSSAI</span>
                                </a>
                                <span className="home__img__para">Sahi Bhojan. Behtar Jeevan!</span>
                            </div>

                            <div className="home__img">
                                <a className="home__img" target="_blank"  rel="noreferrer" href ='https://gstinsuvidhakendra.com/MSME' >
                                    <img src={img5} alt="msme" />
                                    <span className="home__tag">MSME / UDYAM</span>
                                </a>
                                <span className="home__img__para">Promote Innovation, Entrepreneurship and Agro-Industry!</span>
                            </div>

                            <div className="home__img">
                                <a className="home__img" target="_blank"  rel="noreferrer" href ='https://gstinsuvidhakendra.com/E-way-Bill' >
                                    <img src={img10} alt="E-way Bill" />
                                    <span className="home__tag">E-Way Bill</span>
                                </a>
                                <span className="home__img__para">E-Way Bill is to safeguard its revenues!</span>
                            </div>

                            <div className="home__img">
                                <a className="home__img" target="_blank"  rel="noreferrer" href ='https://gstinsuvidhakendra.com/PAN' >
                                    <img src={img9} alt="gst" />
                                    <span className="home__tag">PAN Card</span>
                                </a>
                                <span className="home__img__para"> Most important document!</span>
                            </div>

                    </div>
                </div>


            </div>

            <div className="content__box">

                <Landing/>

            </div>

            <Landing2 />

           <div className="home__banner">

                <span className="banner__text">One Stop Solution </span>
                <span className="banner__heading">Expertised in GST Registration & Filing </span>
                <span className="banner__para">We provide a reliable trusted long term association & services for your business</span>

            </div>
            




        </div>
    )
}

export default Home
