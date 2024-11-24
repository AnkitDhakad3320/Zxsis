import React, { useState, useEffect, useRef, Suspense ,useCallback } from "react";
import ScrollReveal from "scrollreveal";
// import SwiperComponent from "../swiper";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import "../../App.css";
import "./Home.css";
import { ReactComponent as Symbol } from "../images/Symbol.svg";
import { ReactComponent as Flogo } from "../images/Footer-logo.svg";
import { ReactComponent as Palette } from "../images/palette-line.svg";
import { ReactComponent as Text } from "../images/text.svg";
import { ReactComponent as Contrast } from "../images/contrast-2-line.svg";
import { ReactComponent as AlignItem } from "../images/align-item-left-line.svg";
import { ReactComponent as ArrowLeft } from "../images/align-item-left-line.svg";
import { ReactComponent as ArrowRight } from "../images/arrow-right-s-line.svg";
import { ReactComponent as AddCircle } from "../images/add-circle-fill.svg";
import { ReactComponent as CloseCircle } from "../images/close-circle-fill.svg";
import { ReactComponent as Instagram } from "../images/instagram-line.svg";
import { ReactComponent as Linkedin } from "../images/linkedin-line.svg";
import { ReactComponent as Twitter } from "../images/twitter-x-line (1).svg";
import { ReactComponent as Dribbble } from "../images/dribbble-line.svg";

import Lottie from "lottie-react";
// import Lottie from 'react-lottie';
import Animation from "../images/camera-hover-flash.json";
import UiUx from "../images/video-conference-hover-pinch.json";
import Saas from "../images/blinking.json";
import Zx from "../images/zxsis (1).json";
import Bg from "../images/Main Scene.json";

import ThemeToggle from "../Toggle";

import image1 from "../images/image.png";
import image2 from "../images/image (1).png";
import image3 from "../images/image (2).png";
import image4 from "../images/image (3).png";
import image5 from "../images/image.jpg";

// Memoized Nav component
export const Nav = React.memo(() => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAskQuestion = useCallback(() => {
    setModalOpen(true);
  }, []);

  // Optimized handleSendEmail function
  const handleSendEmail = useCallback(async (subject, question) => {
    if (!subject || !question) {
      console.error("All fields must be filled out");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "ankitdhakad4801@gmail.com", 
          subject,
          question,
        }),
      });

      const data = await response.json();
      console.log("Email sent successfully", data);
    } catch (error) {
      console.error("Error sending email:", error.message || error);
    }
  }, []);

  return (
    <nav >
    <div className="nav-container">
      <div className="nav-logo">
        <div className="logo-icon">
          <Lottie animationData={Zx} />
        </div>
        <h2>ZXSIS</h2>
      </div>
      <div className="nav">
        <Link to="/" className="navword" aria-label="Home">Home</Link>
        {["About", "Services", "Portfolio", "Blog"].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`} className="navword" aria-label={item}>
            {item}
          </Link>
        ))}
        <button className="quote-button" onClick={handleAskQuestion} aria-label="Get a Quote">
          Get a Quote
        </button>
      </div>
     
    </div>
    <div className="navModal">
        <Modal 
          className="navModal" 
          isOpen={isModalOpen} 
          onClose={() => setModalOpen(false)} 
          onSend={handleSendEmail}
        />
      </div>
    </nav>
  );
});

// LottieComponent for Background Animation
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

// Header Component
export function Header({ head, subhead, button }) {
  return (
   
      <header className="app-header">
       <div className="background-container">
      <LottieComponent />
    </div>
        <h1>{head}</h1>
        <p>{subhead}</p>
        <button>{button}</button>
      </header>
  );
}
// ===================================== ABOUTSECTION ===============================================

export function AboutSection({ heading, subheading, content, imageUrl ,fallbackImage}) {
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

// ==================================DATA====================================================

const cardData = [
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

// ==========================================SECTION===================================================

export const Section = ({ title, subtitle, cards }) => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="section-heading">{title} </div>
        <div className="section-sub-heading">{subtitle}</div>
      </div>
      <div className="card-container">
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
    </div>
  );
};

// ===============================DATA========================================

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

// -----------------------SERVICES---------------------------------------

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



// ============================DATA===========================================================

const portfolioData = [
  { id: 1, image: image1, title: "Project 1" },
  { id: 2, image: image2, title: "Project 2" },
  { id: 3, image: image3, title: "Project 3" },
  { id: 4, image: image4, title: "Project 4" },
  { id: 5, image: image5, title: "Project 5" },
  { id: 6, image: image2, title: "Project 6" },
  { id: 7, image: image4, title: "Project 7" },
  { id: 8, image: image1, title: "Project 8" },
];

// =========================PORTFOLIO======================================================

export const Portfolio = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          Projects we <br /> have <span>Completed </span>{" "}
        </div>
        <div className="portfolio-btn-container">
          <button> Start a new Project</button>
          <button> View All work</button>
        </div>
      </div>

      <div className={`portfolio-card-container ${isHover ? 'paused' : ''}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)} >
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
          </div>
        ))}
      </div>
    </div>
  );
};

// =================================DATA================================

const testimonials = [
  {
    id: 1,
    quote: "Their experience helped us to develop the business as a whole.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    location: "USA",
    image: "https://images.unsplash.com/photo-1526748072370-e1f39e3a42b1",
  },
  {
    id: 2,
    quote: "Exceptional service and outstanding design quality.",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Jane Smith",
    location: "Canada",
    image: "https://images.unsplash.com/photo-1494231242351-0529f0d23109",
  },
  {
    id: 3,
    quote: "They went above and beyond to meet our needs.",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mike Johnson",
    location: "UK",
    image: "https://images.unsplash.com/photo-1518600901238-5e4a4c7d62a7",
  },
  {
    id: 4,
    quote: "A wonderful team to work with!",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    name: "Sara Lee",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1530525711224-6f6c9ccf37a5",
  },
  {
    id: 5,
    quote: "Fantastic experience from start to finish!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Chris Evans",
    location: "USA",
    image: "path/to/image5.jpg",
  },
  {
    id: 6,
    quote: "Professional and reliable service.",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    name: "Emma Watson",
    location: "UK",
    image: "path/to/image6.jpg",
  },
  {
    id: 7,
    quote: "High quality work delivered on time.",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Daniel Craig",
    location: "UK",
    image: "path/to/image7.jpg",
  },
  {
    id: 8,
    quote: "Exceeded my expectations in every way!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Scarlett Johansson",
    location: "USA",
    image: "path/to/image8.jpg",
  },
];

//=============================TESTIMONIAL=================================================

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
          slidesPerView: 2,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div
                className="swiper-slide testimonial-card"
                key={testimonial.id}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="40"
                    viewBox="0 0 48 40"
                    fill="none"
                  >
                    <path
                      d="M9.68264 40C7.03714 40 4.762 38.9418 2.85724 36.8254C0.95248 34.709 9.91821e-05 31.9577 9.91821e-05 28.5714C9.91821e-05 24.9735 0.793747 21.2698 2.38105 17.4603C3.86253 13.7566 5.92603 10.3704 8.57153 7.30159C11.217 4.2328 14.2329 1.79894 17.6191 0L21.4287 7.14286C18.7832 9.15344 16.6139 11.164 14.9207 13.1746C13.1218 15.1852 11.9578 17.7249 11.4287 20.7936C13.4393 20.8995 15.2911 21.9048 16.9842 23.8095C18.5715 25.8201 19.3652 27.9894 19.3652 30.3175C19.3652 31.9048 18.9419 33.4392 18.0953 34.9206C17.143 36.4021 15.926 37.619 14.4445 38.5714C12.9631 39.5238 11.3758 40 9.68264 40ZM36.0318 40C33.3863 40 31.1112 38.9418 29.2064 36.8254C27.1959 34.709 26.1906 31.9577 26.1906 28.5714C26.1906 24.9735 26.9842 21.2698 28.5715 17.4603C30.1588 13.7566 32.2752 10.3704 34.9207 7.30159C37.5662 4.2328 40.5821 1.79894 43.9683 0L47.6191 7.14286C45.0795 9.15344 42.9631 11.164 41.2699 13.1746C39.471 15.1852 38.3599 17.7249 37.9366 20.7936C39.2064 20.8995 40.4234 21.3757 41.5874 22.2222C42.7514 23.1746 43.7567 24.3915 44.6033 25.873C45.344 27.3545 45.7144 28.836 45.7144 30.3175C45.7144 31.9048 45.2911 33.4392 44.4445 34.9206C43.4922 36.4021 42.2752 37.619 40.7937 38.5714C39.3123 39.5238 37.725 40 36.0318 40Z"
                      fill="#63C5EA"
                    />
                  </svg>
                </span>
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
                    ></div>
                    <div className="testimonial-details-name">
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.location}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination and Navigation */}
      <div className="swiperArrow">
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swipe-left">
          <ArrowLeft />
        </div>
        <div className="swiper-button-next swipe-right">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

// ======================================Data================================================

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

// ------------------------------FAQ------------------------------------------

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

// --------------------------------------------------------------------------

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
    <div className="faq">
      <div className="faq-head">
        <div className="faq-heading">FAQ</div>
        <div className="faq-text">
          Can't find the answers you're looking for? Ask us and get answer in 24
          hrs.
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
      <div className="modal-overlay">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSend={handleSendEmail}
        />
      </div>
    </div>
  );
};

// ==============================MODAL=============================

const Modal = ({ isOpen, onClose, onSend }) => {
  // Consolidating the form data into a single object state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    question: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the user modifies the field
    }));
  };

  // Validate phone number
  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/; // Simple 10-digit phone number validation
    return phonePattern.test(phone);
  };

  // Validate email
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // Validate form before submission
  const handleSend = (e) => {
    e.preventDefault();
    const { email, phone, question } = formData;
    onSend(email, phone, question);

    const newErrors = { phone: "", email: "", question: "" };
    let formIsValid = true;

    // Validate phone number
    if (!formData.phone || !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      formIsValid = false;
    }

    // Validate email
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    // Validate question field
    if (!formData.question.trim()) {
      newErrors.question = "The question field cannot be empty.";
      formIsValid = false;
    }

    // Set errors if any
    setErrors(newErrors);
    if (formIsValid) {
      resetForm();
      onClose();
      newErrors.submit = "Form submitted successfully";
      alert("Form submitted successfully!");
      // You can also proceed with the API call or further actions here
    }
  };
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
    <div className="modal">
      <form onSubmit={handleSend}>
        <div className="modal-content">
          <div className="modal-content-header">
            <div>
              <h2>Get in Touch</h2>
              <p>You can reach us any time</p>
            </div>
            <button className="cross" onClick={onClose}>
              <CloseCircle />
            </button>
          </div>

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
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="✉ hello@deskkit.com"
              required
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <label>
            Phone No.
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="(+91) 9898778989"
              onChange={handleChange}
              required
            />
          </label>
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          <label>
            Your message
            <textarea
              name="question"
              value={formData.question}
              placeholder="How can we help you?"
              onChange={handleChange}
              required
              rows="4"
              cols="50"
            />
          </label>
          {errors.question && <p style={{ color: "red" }}>{errors.question}</p>}
          <button type="submit" className="sendButton" onClick={handleSend}>
            Send
          </button>
        </div>
      </form>
        {errors.submit && <p style={{ color: "green" }}>{errors.submit}</p>}
    </div>
  );
};

export default Modal;

//==========================================FOOTER====================================================

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
      <div className="footer-body">
        <div className="footer-body-left">
          <div className="footer-logo">
            <div className="flogo-icon">
              <Flogo />
            </div>
            <div className="flogo-text">ZXSIS</div>
            <ThemeToggle />
          </div>
          <div className="footer-text">
            <p>
              Transform Your Online Identity with <br /> Innovative and Dynamic
              Design
            </p>
            <p>
              Let us bring your vision to life with stunning visuals <br /> that
              engage and inspire!
            </p>
          </div>
          <div className="copyright-tag">All rights reserved by ZXSIS LLP</div>
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
          <div className="footer-socialmedia">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Instagram />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/zxsis/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Linkedin />
              LinkedIn
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Twitter />
              Twitter
            </a>
            <a
              href="https://www.dribble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <Dribbble />
              Dribble
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

//-----------------------------------------MAIN HOME PAGE---------------------------------------------------
const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

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

export const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 100,
    });

    sr.reveal(".services-header, .app-header, .services-card-icon, .footer-head-container, .testimonial-header", { origin: "top" });
    sr.reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form, .swiperArrow", { origin: "bottom" });
    sr.reveal(".faq-head, .footer-body-left, .about-content", { origin: "left" });
    sr.reveal(".faq-content, .footer-options, .about-image", { origin: "right" });

    return () => sr.destroy();
  }, []);

  const seoData = {
    title: "Transform Your Online Identity | ZXSIS",
    description: "We provide innovative digital design solutions to elevate your business's online presence.",
    keywords: "web design, branding, digital marketing, graphic design, Figma, portfolio",
  };

  return (
    <div>
      <SEO {...seoData} />
      <Helmet>
        <meta name="author" content="ZXSIS" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content="We design beautiful and dynamic digital experiences." />
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
                Transform Your Online <br /> Identity with <span>Innovative</span> <br /> and <span>Dynamic</span> Design
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
          <section>
            <Section
              title={<span>We design in <Symbol /> Figma</span>}
              subtitle="We've got you covered."
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