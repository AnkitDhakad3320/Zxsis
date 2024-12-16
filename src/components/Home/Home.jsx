import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  useCallback,
} from "react";
import ScrollReveal from "scrollreveal";
// import { Link,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

// import "../../App.css";
import "./Home.css";
import { ReactComponent as Symbol } from "../images/Symbol.svg";
import { ReactComponent as Flogo } from "../images/Footer-logo.svg";
import { ReactComponent as Palette } from "../images/palette-line.svg";
import { ReactComponent as Text } from "../images/text.svg";
import { ReactComponent as Contrast } from "../images/contrast-2-line.svg";
import { ReactComponent as AlignItem } from "../images/align-item-left-line.svg";
// import { ReactComponent as ArrowLeft } from "../images/arrow-left-s-line.svg";
// import { ReactComponent as ArrowRight } from "../images/arrow-right-s-line.svg";
import { ReactComponent as AddCircle } from "../images/add-circle-fill.svg";
import { ReactComponent as Addlink } from "../images/arrow-right-up-line.svg";
import { ReactComponent as CloseCircle } from "../images/close-circle-fill.svg";
import { ReactComponent as Instagram } from "../images/instagram-line.svg";
import { ReactComponent as Linkedin } from "../images/linkedin-line.svg";
import { ReactComponent as Twitter } from "../images/twitter-x-line (1).svg";
import { ReactComponent as Dribbble } from "../images/dribbble-line.svg";
import { ReactComponent as BlueQ } from "../images/blue_.svg";
import { ReactComponent as PinkQ } from "../images/pink_.svg";
import { ReactComponent as LogoDark } from "../images/text (dark).svg";
import { ReactComponent as LogoLight } from "../images/text (light).svg";
import { ReactComponent as LogoFF } from "../images/textz.svg";

import Lottie from "lottie-react";
// import Lottie from 'react-lottie';
// import FooterLogo from "../images/Main foot.json";
import Animation from "../images/camera-hover-flash.json";
import UiUx from "../images/video-conference-hover-pinch.json";
import Saas from "../images/blinking.json";
import Zx from "../images/zxsis (1).json";
import Bg from "../images/Main Scene.json";
import Menu from "../images/EGFPsT6Lbh.json";

// import ThemeToggle from "../Toggle";
import ThemeToggle from '../ThemeToggle.js';
import { useTheme } from '../ThemeContext.js';


import image1 from "../images/image.png";
import image2 from "../images/image (1).png";
import image3 from "../images/image (2).png";
import image4 from "../images/image (3).png";
import image5 from "../images/image.jpg";



// ======================================DATA====================================================

export const cardData = [
  {
    icon: <Palette />,
    title: "Color System",
    description:
      "A massively versatile colour system based on the popular UI library palette.",
  },
  {
    icon: <Text />,
    title: "Typography",
    description:
      "Elegant typography that enhances readability and user experience.",
  },
  {
    icon: <Contrast />,
    title: "Spacing System",
    description:
      "A comprehensive spacing system to ensure consistency in layout.",
  },
  {
    icon: <AlignItem />,
    title: "Iconography",
    description: "A well-designed icon set to improve visual communication.",
  },
];

// ======================================DATA=====================================================

const serviceData = [
  {
    icon: Animation,
    title: "Social Media Design",
    descriptions: [
      "Eye-catching visuals that boost engagement",
      "Consistent branding across platforms",
      "Tailored designs for each social network",
    ],
  },
  {
    icon: UiUx,
    title: "UI/UX Design",
    descriptions: [
      "User-centered designs for enhanced experience",
      "Prototyping and wireframing",
      "Usability testing to refine designs",
    ],
  },
  {
    icon: Saas,
    title: "SaaS Solutions",
    descriptions: [
      "Custom software solutions for your needs",
      "Scalable applications to grow with your business",
      "Seamless integration with existing systems",
    ],
  },
];

// ======================================DATA=====================================================

const portfolioData = [
  {
    id: 1.1,
    image: image1,
    title: "Project 1",
    detail: "Description for project 1",
    link: "/destination-page#specific-section",
  },
  {
    id: 1,
    image: image1,
    title: "Project 1",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 2,
    image: image2,
    title: "Project 2",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 3,
    image: image3,
    title: "Project 3",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 4,
    image: image4,
    title: "Project 4",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 5,
    image: image5,
    title: "Project 5",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 6,
    image: image2,
    title: "Project 6",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 7,
    image: image4,
    title: "Project 7",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
  {
    id: 8,
    image: image1,
    title: "Project 8",
    link: "#",
    detail:
      "A highly adaptable color system inspired by the widely-used Ui library palette.",
  },
];

// ======================================DATA=====================================================

const testimonials = [
  {
    id: 1,
    quote: "Their experience helped us to develop the business as a whole.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    location: "USA",
    image: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    quote: "Exceptional service and outstanding design quality.",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Jane Smith",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    quote: "They went above and beyond to meet our needs.",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mike Johnson",
    location: "UK",
    image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    quote: "A wonderful team to work with!",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Sara Lee",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    quote: "Fantastic experience from start to finish!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Chris Evans",
    location: "USA",
    image: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    quote: "Professional and reliable service.",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    name: "Emma Watson",
    location: "UK",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    quote: "High quality work delivered on time.",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Daniel Craig",
    location: "UK",
    image: "https://plus.unsplash.com/premium_photo-1664541336692-e931d407ba88?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    quote: "Exceeded my expectations in every way!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Scarlett Johansson",
    location: "USA",
    image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ======================================Data======================================================

const faqs = [
  {
    question: "What's the price range for a dashboard?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Do you work with small business?",
    answer: "Typically, it takes around 2-4 weeks depending on complexity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, dashboards are fully customizable based on your needs.",
  },
  {
    question: "Is there a possibility of offline meeting?",
    answer: "We provide 24/7 support via email and chat.",
  },
  {
    question: "How long does the project takes on an average",
    answer: "We provide 24/7 support via email and chat.",
  },
];

//=======================================MODAL=====================================================

const Modal = ({ isOpen, onClose ,modal , cross}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error when the field is updated
    }));
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    const { email, phone, question } = formData;

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!question.trim()) {
      newErrors.question = "The question field cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSend = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "service_y1svujj3320",
          "template_8mkgrbg",
          formData,
          "ARl-BTdvE0TwVlZfk"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            setSuccessMessage("Email sent successfully!");
            setIsSending(false);
            resetForm();
            setTimeout(() => {
              setSuccessMessage("");
              onClose();
            }, 3000);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
            setIsSending(false);
          }
        );
    }
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      question: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className={modal  || "modal"}>
      <form onSubmit={handleSend}>
        <div className="modal-content">
          <header className="modal-content-header">
            <div>
              <h2>Get in Touch</h2>
              <p>You can reach us any time</p>
            </div>
            <button type="button" className={cross||"cross"} onClick={onClose}>
              <CloseCircle></CloseCircle>
            </button>
          </header>

          <div className="full-name">
            <label>
              First Name
              <input
                className="name"
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="John"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name
              <input
                className="name"
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Smith"
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="hello@deskkit.com"
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              maxLength={10}
              value={formData.phone}
              placeholder="1234567890"
              onChange={handleChange}
              required
            />
          </label>
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

          <label>
            Your Message
            <textarea
              name="question"
              value={formData.question}
              placeholder="How can we help you?"
              onChange={handleChange}
              required
              rows="4"
            />
          </label>
          {errors.question && <p style={{ color: "red" }}>{errors.question}</p>}

          <button type="submit" className="sendButton">
            {isSending ? "Sending..." : "Send"}
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Modal;

//================================ LottieComponent for Background Animation======================

export const LottieComponent = React.memo(() => {
  const animationSpeed = 0.2;

  return (
    <div>
      <Lottie
        animationData={Bg}
        loop={true}
        autoplay={true}
        speed={animationSpeed}
        style={{ opacity: ".05" }}
      />
    </div>
  );
});


// ================================Nav component==============================================

export const Nav = React.memo(() => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  // const location = useLocation();
  // const isActive = (path) => location.pathname === path;

  // const handleAskQuestion = useCallback(() => {
  //   setModalOpen(true);
  // }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  // Optimized handleSendEmail function
  // const handleSendEmail = useCallback(async (subject, question) => {
  //   if (!subject || !question) {
  //     console.error("All fields must be filled out");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: "ankitdhakad4801@gmail.com",
  //         subject,
  //         question,
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log("Email sent successfully", data);
  //   } catch (error) {
  //     console.error("Error sending email:", error.message || error);
  //   }
  // }, []);

  return (
    <nav className="nav_container">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <Lottie animationData={Zx}/>
          </div>
          {isDarkMode ? <LogoDark />:<LogoLight/>}
        </div>
        <div className="nav">
          <Link
            to="/"
            className="navword"
            // {`navword ${isActive("/") ? "active" : ""}`} aria-label="Home"
          >
            Home
          </Link>
          {["About", "Services", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="navword"
              // {`navword ${isActive(`/${item.toLowerCase()}`) ? "active" : ""}`}
              aria-label={item}
            >
              {item}
            </Link>
          ))}
          <Link to="/Quote">
          <button
            className="quote-button"
            aria-label="Get a Quote"
          >
            Get a Quote
          </button>
          </Link>
        </div>
        <div className="menu">
          <button
            className="menu-button"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <Lottie animationData={Menu} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-list">
          <Link to="/" className="menu-item" onClick={toggleMenu}>
            Home
          </Link>
          {["About", "Services", "Portfolio", "Blog"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="menu-item"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <Link  to="/quote">
          <button
            className="menu-quote-button"
            onClick={() => {
              toggleMenu();
            }}
          >
            Get a Quote
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
});

// ======================================Header Component==============================================

export function Header({ head, subhead, button }) {
  return (
    <header className="app-header">
      <div className="background-container">
        <LottieComponent />
      </div>
      <h1>{head}</h1>
      <p>{subhead}</p>
      <button>
        {" "}
        <Link to="/Services">{button}</Link>
      </button>
    </header>
  );
}
// ======================================= ABOUTSECTION ===============================================

export function AboutSection({
  heading,
  subheading,
  content,
  imageUrl,
  fallbackImage,
}) {
  // const fallbackImage = "https://via.placeholder.com/400";
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-heading">
          <h1>{heading}</h1>
        </div>
        <div className="about-text">
          <p>{subheading}</p>
          <p>{content}</p>
        </div>
      </div>

      <div className="about-image-wrapper">
        <img
          className="about-image"
          src={imageUrl || fallbackImage}
          alt="About Us"
          loading="lazy"
          width="400"
          height="auto"
        />
      </div>
    </div>
  );
}

// ==========================================SECTION===================================================

export const Section = ({ title, subtitle, cards ,titleStyle,container }) => {
  return (
    <>
      <div className="section-content"style={titleStyle}>
        <div className="section-heading">{title} </div>
        <div className="section-sub-heading" >{subtitle}</div>
      </div>
      <div className={container}>
        {cards.map((item, index) => (
          <div className="section-card" key={index}>
            <span className={`icon ${item.icon}`}>{item.icon} </span>{" "}
            <div className="card-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//===========================================SERVICES==================================================

export const OurServices = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>We provide you simple and effective solutions.</p>
      </div>
      <div className="services-container">
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="services-card" key={index}>
              <div className="services-card-icon">
                <Lottie className="servicesIcon" animationData={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <ul className="services-card-text">
                {service.descriptions.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================PORTFOLIO=================================================

export const Portfolio = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          Projects we <br /> have <span>Completed </span>{" "}
        </div>
        <div className="portfolio-btn-container">
          <button>
            <Link to="/About">Start a new Project</Link>{" "}
          </button>
          <button>
            {" "}
            <Link to="/Portfolio">View All work</Link>
          </button>
        </div>
      </div>

      <div
        className={`portfolio-card-container ${isHover ? "paused" : ""}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {portfolioData.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="portfolio-image"
              // onError={(e) => {
              //   e.target.src = "./assets/default.jpg";
              // }} // Optional fallback image
            />
            <div className="card-details">
              <h2 className="card-heading">{item.title}</h2>
              <p className="card-about">{item.detail}</p>
            </div>
            <div className="card-link">
              <a href={item.link} className="cardlinkto" target="_self">
                <Addlink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//===========================================TESTIMONIAL===============================================

export const Testimonial = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadSwiper = () => {
      const cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href =
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.css";
      document.head.appendChild(cssLink);

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js";
      script.onload = () => {
        swiperRef.current = new window.Swiper(".mySwiper", {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 12,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
        });

        // Automatic slide transition
        const interval = setInterval(() => {
          swiperRef.current.slideNext();
        }, 5000);

        return () => clearInterval(interval);
      };
      document.body.appendChild(script);
    };

    loadSwiper();

    return () => {
      const swiperScript = document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js"]'
      );
      if (swiperScript) {
        document.body.removeChild(swiperScript);
      }
    };
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        What our <br />
        <span>Satisfied clients</span> say
      </div>
      <div style={{ position: "relative" }}>
        <div className="middle-rule">
          <div className="rule rule-div"></div>
          <div className="rule-div"></div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div
                className="swiper-slide testimonial-card"
                key={testimonial.id}
              >
                <div className="testimonial-card-content">
                  <div className="testimonial-card-image">
                    <span>
                      <span>{index % 2 === 0 ? <BlueQ/> : <PinkQ/>}</span>
                    </span>
                  </div>
                  <div className="testimonial-card-text">
                    <div className="testimonial-text-head">
                      {testimonial.quote}
                    </div>
                    <div className="testimonial-text-para">
                      {testimonial.text}
                    </div>
                    <div className="testimonial-detail">
                      <div
                        className="testimonial-details-image"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      >
                        {/* <img
              src={testimonial.image}
              alt={testimonial.index}
              loading="lazy"
                   className="testimonial-details-image"
              ></img> */}
                      </div>
                      <div className="testimonial-details-name">
                        <h4>{testimonial.name}</h4>
                        <h5>{testimonial.location}</h5>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pagination and Navigation */}
      <div className="dot-container">
        <div className="swiperArrow">
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev swipe-left">
            {/* <ArrowLeft /> */}
          </div>
          <div className="swiper-button-next swipe-right">
            {/* <ArrowRight /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------FAQ----------------------------------------------------

const FaqCard = ({ question, answer, isOpen, onToggle }) => (
  <div className="faq-card">
    <div className="faq-slide" onClick={onToggle}>
      <div className="faq-card-text">{question}</div>
      <div className="faq-card-icon">
        {isOpen ? <CloseCircle /> : <AddCircle />}
      </div>
    </div>
    {isOpen && (
      <div className="faq-open">
        <hr />
        <div className="faq-query">
          <p>{answer}</p>
        </div>
      </div>
    )}
  </div>
);

// ---------------------------------------------------------------------------------------------------

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskQuestion = () => {
    setModalOpen(true);
  };

  const handleSendEmail = (email, subject, question) => {
    console.log(
      `Sending email to: ${email},Subject: ${subject} , Question: ${question}`
    );
  };

  return (
    <>
      <div className="faq">
        <div className="faq-head">
          <div className="faq-heading">FAQ</div>
          <div className="faq-text">
            Can't find the answers you're looking for? Ask us and get answer in
            24 hrs.
          </div>
          <button className="faq-button" onClick={handleAskQuestion}>
            Ask a question
          </button>
        </div>
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <FaqCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      <div className="modal-overlay">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSend={handleSendEmail}
        />
      </div>
    </>
  );
};

//============================================FOOTER==================================================

export const Footer = React.memo(() => {
  return (
    <div className="footer">
      <div className="footer-head-container">
        <div className="footer-head">
          <div className="footer-heading">
            Ready to elevate your digital presence?
          </div>
          <div className="footer-head-text">Let's chat about your project!</div>
        </div>
        <button className="footer-button">Chat with our experts</button>
      </div>
      <hr />
      <div className="footer-logo">
        <div className="flogo-icon">
          <Flogo />
         
        </div>
        <div className="flogo-text">
        <LogoFF/>
        {/* <Lottie animationData={FooterLogo} /> */}
        </div>
        <ThemeToggle />
      </div>
      <div className="footer-body">
        <div className="footer-body-left">
          <div className="footer-text">
            <p>
              Transform Your Online Identity with <br /> Innovative and Dynamic
              Design
            </p>
            <p>
              Let us bring your vision to life with stunning <br /> visuals that
              engage and inspire!
            </p>
          </div>
        </div>

        <div className="footer-options">
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer-policies">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="foot-last">
        <div className="copyright-tag">All rights reserved by ZXSIS LLP</div>
        <div className="footer-socialmedia">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <Instagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/zxsis/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <Twitter />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.dribble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <Dribbble />
            <span>Dribble</span>
          </a>
        </div>
      </div>
    </div>
  );
});

//---------------------------------------------SEO----------------------------------------------------

const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

// =======================================structuredData==============================================

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZXSIS",
  url: "https://zxsis.com",
  logo: "https://zxsis.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-555-5555",
    contactType: "Customer Service",
  },
  sameAs: [
    "https://www.instagram.com/zxsis",
    "https://www.linkedin.com/company/zxsis",
  ],
};

//=======================================-MAIN HOME PAGE---===========================================

export const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 100,
    });

    sr.reveal(
      ".services-header, .app-header, .services-card-icon, .footer-head-container, .portfolio-container ,.section-container , .testimonial-header",
      { origin: "top" }
    );
    sr.reveal(
      ".home-img img,.swiper, .services-container, .portfolio-box, .testimonial-wrapper, .contact form, .swiperArrow",
      { origin: "bottom" }
    );
    sr.reveal(".faq-head,.copyright-tag , .footer-body-left, .about-content ", {
      origin: "left",
    });
    sr.reveal(
      ".faq-content ,.footer-logo , .footer-options, .about-image , .footer-socialmedia",
      {
        origin: "right",
      }
    );

    return () => sr.destroy();
  }, []);

  const seoData = {
    title: "Transform Your Online Identity | ZXSIS",
    description:
      "We provide innovative digital design solutions to elevate your business's online presence.",
    keywords:
      "web design, branding, digital marketing, graphic design, Figma, portfolio",
  };

  return (
    <div>
      <SEO {...seoData} />
      <Helmet>
        <meta name="author" content="ZXSIS" />
        <meta property="og:title" content={seoData.title} />
        <meta
          property="og:description"
          content="We design beautiful and dynamic digital experiences."
        />
        <meta property="og:image" content="https://zxsis.com/og-image.jpg" />
        <meta property="og:url" content="https://zxsis.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="Home">
        <header className="navbar">
          <Nav />
        </header>
        <main>
          <Header
            head={
              <div>
                Transform Your Online <br /> Identity with{" "}
                <span>Innovative</span> <br /> and <span>Dynamic</span> Design
              </div>
            }
            subhead="Let us bring your vision to life with stunning visuals that engage and inspire!"
            button="Explore Our Services"
          />
          <section>
            <AboutSection
              heading="About Us"
              subheading="At ZXSIS"
              content="We're passionate about creating designs that not only look great but also drive results. Our team of experienced designers and developers work collaboratively to bring your vision to life, ensuring that every pixel serves a purpose."
              imageUrl="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
            />
          </section>
          <section className="section-container">
            <Section
              title={
                <span>
                  We design in <Symbol /> Figma
                </span>
              }
              subtitle="We've got you covered."
              container="card-container"
              cards={cardData}
            />
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <OurServices />
            <Portfolio />
            <Testimonial />
            <Faq />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
