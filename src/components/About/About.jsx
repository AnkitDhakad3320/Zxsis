import { Footer, Nav } from "../Home/Home"
// import "./About.css";

export const Welcome = ({quote , header ,greet}) => {
    return (
        <div className="welcome">
        <div className="about-greet">{quote}</div>
        <div className="about-tagline">{header} </div>
        <div className="about-greet-text">{greet}</div>
        </div>
    )
}

export const AboutSec = () =>{
    return(
        <div className="about-sec">
            <div className="about-sec-text">
                <div>We pride ourselves on our team of<br/> skilled <span>Designers</span> and <span>Developers</span></div>
                <p>Each member of our team brings a unique set of talents and expertise, allowing us to approach every project with a fresh perspective. Our creative process involves in-depth discussions with you to understand your needs and objectives, ensuring that every design element is purposeful and aligns with your business goals.</p>
            </div>
            <div className="about-sec-image">
            </div>
        </div>
    )
}


export const OurTeam = () => {
    return(
        <div className="our-team"> 
        <div className="our-team-container">
            <div className="our-team-head">
            <h2>Our Team</h2>
            <p>Peoples behind amazing development</p>
             </div>
            <div className="our-team-detail">
                <h3>Ankit Dhakad</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <button>View their work</button>
            </div>
            <div></div>
        </div>
        <div className="our-team-image">
            <div className="member-image"></div>
        </div>
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


export const About = ()=>{
    return (
        <div className="About">
        <div className="navbar">
            <Nav/>
        </div>
            <Welcome
                quote={"Welcome to Zxsis"}
                header={<div>Where our <span>Passion for design</span>  meets our <br/> commitment to delivering <span>Impactful results.</span></div>}
                greet={<div>We believe that great design is not just about aesthetics; it’s about creating <br/> meaningful experiences that resonate with users and drive business success.</div>}
            />
            <AboutSec/>
            <OurTeam/>
            <Lastabout/>
            {/* <TestimonialsSwiper/> */}
            <Footer/>
        </div>
    )
}

