import "../Services/Services.css";
import { Footer, Nav, Section } from "../Home/Home";
import { Lastabout } from "../About/About";
import { ReactComponent as Palette } from "../images/palette-line.svg";
import { ReactComponent as Text } from "../images/text.svg";
import { ReactComponent as Contrast } from "../images/contrast-2-line.svg";

import Image5 from "./Service_image/coman.png";
import Image6 from "./Service_image/Rectangle 3.jpg";
import Image7 from "./Service_image/Rectangle 3 (1).jpg";

const cardData1 = [
  {
    icon: <Palette />,
    title: "Intuitive Interfaces",
    description:
      "Design user-friendly interfaces that prioritise user needs and enhance interaction.",
  },
  {
    icon: <Text />,
    title: "Seamless Experiences",
    description:
      "Craft fluid user journeys that reduce friction and improve satisfaction.",
  },
  {
    icon: <Contrast />,
    title: "Data-Driven Decisions",
    description:
      "Utilize user research and analytics to inform design choices, ensuring alignment with user expectations.",
  },
  {
    icon: <Contrast />,
    title: "Prototyping and Testing",
    description:
      "Develop prototypes and conduct usability testing to refine designs based on real user feedback.",
  },
];
const cardData2 = [
  {
    icon: <Palette />,
    title: "Consistent Branding",
    description:
      "Ensure your brand identity is cohesive across all platforms, fostering recognition and trust.",
  },
  {
    icon: <Text />,
    title: "Tailored Designs",
    description:
      "Customise designs for each social network to maximise impact and audience reach.",
  },
  {
    icon: <Contrast />,
    title: "Content Strategy Support",
    description:
      "Collaborate on content strategies that align visuals with messaging to enhance storytelling.",
  },

];
const cardData3 = [
  {
    icon: <Palette />,
    title: "Custom Website Development",
    description:
      "Build responsive, high-performance websites tailored to your business needs using modern technologies.",
  },
  {
    icon: <Text />,
    title: "E-commerce Solutions",
    description:
      "Develop scalable e-commerce platforms with seamless shopping experiences and secure payment gateways.",
  },
  {
    icon: <Contrast />,
    title: "API Integration: ",
    description:
      "Connect your applications with third-party services for enhanced functionality and streamlined workflows.",
  },
  {
    icon: <Contrast />,
    title: "Content Management Systems",
    description:
      "Implement user-friendly CMS solutions that empower you to manage your content with ease.",
  },
];
const cardData4 = [
  {
    icon: <Palette />,
    title: "Native and Cross-Platform Apps",
    description:
      "Develop high-quality mobile applications that provide a native experience across iOS and Android.",
  },
  {
    icon: <Text />,
    title: "User-Centric Design",
    description:
      "Combine exceptional UI/UX design with robust functionality to create engaging mobile experiences.",
  },
  {
    icon: <Contrast />,
    title: "Ongoing Support and Maintenance",
    description:
      "Offer continuous support to ensure your app remains up-to-date and performs optimally.",
  },
];
const cardData5 = [
  {
    icon: <Palette />,
    title: "Scalable Design Systems",
    description:
      "Build adaptable design frameworks that grow with your product and team.",
  },
  {
    icon: <Contrast />,
    title: "Visually Appealing Dashboards",
    description:
      "Design intuitive dashboards that present data clearly, allowing users to derive insights easily.",
  },
  {
    icon: <Text />,
    title: "Streamlined Onboarding",
    description:
      "Create engaging onboarding experiences that help users quickly understand and adopt your software.",
  },
  {
    icon: <Contrast />,
    title: "Responsive Designs: ",
    description:
      "Ensure your SaaS product is accessible across all devices, enhancing usability for all users.",
  },
];
const cardData6 = [
  {
    icon: <Palette />,
    title: "Brand Strategy Development",
    description:
      "Help define your brand’s vision, mission, and values for a cohesive identity.",
  },
  {
    icon: <Text />,
    title: "Logo and Visual Identity Design",
    description:
      "Create distinctive logos and visual elements that resonate with your target audience.",
  },
  {
    icon: <Contrast />,
    title: "Brand Guidelines",
    description:
      "Develop comprehensive brand guidelines to maintain consistency across all marketing channels",
  },
];


export const ServiceWelcome = ({ quotes, headers, greets }) => {
  return (
    <div className="service-welcome">
      <div className="service-greet">{quotes}</div>
      <div className="service-tagline">{headers} </div>
      <div className="service-greet-text">{greets}</div>
    </div>
  );
};

export const ImageComponent = ({ImageSrc,classvariable }) => {
  return (
    <div className="image-conatiner">
      <img
        src={ImageSrc}
        alt="title"
        className={classvariable  ||"component-image"}
        // onError={(e) => { e.target.src = './assets/default.jpg'; }}
      />
    </div>
  );
};

export const Services = () => {
  return (
    <div className="services-page">
      <div className="navbar">
        <Nav />
      </div>

      <ServiceWelcome
        className="welcome"
        style={{ margin: "108px, 0px" }}
        quotes={"Our services"}
        headers={
          <div>
            Transforming Your Vision into <span>Impactful Design </span> and{" "}
            <span> Development Solutions</span>
          </div>
        }
        greets={
          "Unleashing Creativity and Innovation to Elevate Your Brand's Presence"
        }
      />

<div className="forth-template">
        <div className="service-section">
          <Section
            title={<span>UI/UX Design</span>}
            subtitle="Designing intuitive interfaces that enhance user satisfaction and drive conversions."
            container="card-container"
            cards={cardData1}
            titleStyle={{ alignItems: "flex-start" }}
          />
        </div>
        <ImageComponent  ImageSrc={Image5}
        />
      </div>

<div className="section-card-3">
        <Section
          title="Social Media Design"
          subtitle="Crafting visually stunning graphics that captivate and engage your audience."
          container={"section-card-container"}
          cards={cardData2}
          titleStyle={{ alignItems: "flex-start" }}
        />
      </div>

      <div className="forth-template-rev">
        <ImageComponent 
        id="left-image-comp"
         ImageSrc={Image7}
          classvariable="rev-component-image"
         />
        <div className="service-section">
        <Section
            title={<span>SaaS Design</span>}
            subtitle="Creating scalable and user-friendly solutions for modern software applications."
            container="card-container"
            cards={cardData5}
            titleStyle={{ alignItems: "flex-start" }}
          />
        </div>
      </div>

      <div className="section-card-3">
        <Section
          title={"Mobile App Development"}
          subtitle="Developing high-quality mobile applications that elevate user engagement on-the-go."
          container={"section-card-container"}
          cards={cardData4}
          titleStyle={{ alignItems: "flex-start" }}
        />
      </div>
      
      <div className="forth-template">
        <div className="service-section">
        <Section
            title={<span>Web Development</span>}
            subtitle="Building custom websites that deliver exceptional performance and user experience."
            container="card-container"
            cards={cardData3}
            titleStyle={{ alignItems: "flex-start" }}
          />
        </div>
        <ImageComponent  ImageSrc={Image6}/>
      </div>
      
      <div className="section-card-3">
        <Section
          title={"Branding and Identity"}
          subtitle="Establishing a strong brand presence that resonates with your target audience."
          container={"section-card-container"}
          cards={cardData6}
          titleStyle={{ alignItems: "flex-start" }}
        />
      </div>
      <Lastabout setStyle={{ display: "none" }} />
      <Footer />
    </div>
  );
};
