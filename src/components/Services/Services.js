import { Footer, Nav ,Section } from "../Home/Home"
// import "../../App.css";
// import "../Services/Services.css"
// import {Lastabout} from "../About/About"
// import "../About/About.css";
// import "../Home/Home.css"

import { ReactComponent as Palette } from "../images/palette-line.svg";
import { ReactComponent as Text } from "../images/text.svg";
import { ReactComponent as Contrast } from "../images/contrast-2-line.svg";
// import { Lastabout } from "../About/About";
// import { ReactComponent as AlignItem } from "../images/align-item-left-line.svg";
import Image5 from '../images/coman.png';




export const ServiceWelcome = ({quotes,headers,greets}) => {
    return (
        <div className="service-welcome">
        <div className="service-greet">{quotes}</div>
        <div className="service-tagline">{headers} </div>
        <div className="service-greet-text">{greets}</div>
        </div>
    )
};

export const ImageComponent = ()=>{
  return(
      <div className=" image-conatiner">
       <img
            src={Image5}
            alt="title"
            className="portfolio-image"
            onError={(e) => { e.target.src = './assets/default.jpg'; }} // Optional fallback image
          />
       </div>
  )
}


export const Lastabout = ( ) => {
    return (
        <div className="last-about">
            <div className="last-about-text">Join us on this <span>journey of creativity and success</span><br/> as we craft designs that are <span>not just beautiful</span>, but<br/> <span>also effective</span>.</div>
            <div className="last-about-card-container">
                <div className="last-about-card">
                    <div className="last-about-card-head">Together</div>
                    <p>We can bring your concepts to life and elevate your brand in a competitive landscape.</p>
                </div>
                <div className="last-about-card">
                <div className="welcome-head">Welcome to the Zxsis family</div>
                <div className="welcome-note">we are excited to work with you!</div>
                <div className="email"> 
                <label>Email Address</label><br/><input type="email" placeholder="hello@destkit.com"></input>
                </div>
                <button>Contact us now</button>

                </div>
            </div>

        </div>
    )
}


 export const Services = () => {

    
const cardData = [
    {
      icon: <Palette/>,
      title: "Intuitive Interfaces",
      description:
        "Design user-friendly interfaces that prioritise user needs and enhance interaction.",
    },
    {
      icon: <Text/>,
      title: "Seamless Experiences",
      description:
        "Craft fluid user journeys that reduce friction and improve satisfaction.",
    },
    {
      icon: <Contrast/>,
      title: "Data-Driven Decisions",
      description:
        "Utilize user research and analytics to inform design choices, ensuring alignment with user expectations.",
    },
    {
        icon: <Contrast/>,
      title: "Prototyping and Testing",
      description: "Develop prototypes and conduct usability testing to refine designs based on real user feedback.",
    },
  ];
    return (
        <div className="services">
        <Nav className="navbar"/>
        <ServiceWelcome className="welcome"
            quotes={"Our services"}
            headers={<div>Transforming Your Vision into <span>Impactful Design </span> <br></br>and<span> Development Solutions</span></div>}
            greets={"Unleashing Creativity and Innovation to Elevate Your Brand's Presence"}
        />
        <div className="forth-template">
        <Section
            title={
            <span>
              UI/UX Design
            </span>
          }
          subtitle="Designing intuitive interfaces that enhance user satisfaction and drive conversions."
          cards={cardData}
        />
        <ImageComponent/>
        </div>
       
        <Lastabout/>
        <Footer/>

        </div>
    )
 }