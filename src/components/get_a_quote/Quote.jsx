import { useState } from "react";
import { Nav, Footer} from "../Home/Home"
import Modal from "../Home/Home";
import "./Quote.css"

import emailjs from "emailjs-com";

export const ContactUs = ()=>{
  
  return(
    <div className="contactUs">
    <div className="contactUs-header">
      <div className="contactUs-head">Contact Us</div>
      <div className="contactUs-subhead">Fill the form to learn how we transforming Your Vision into Impactful Design</div>
    </div>
    <div className="contactUs-form">
      <Modal isOpen="true"
        modal="new-modal"
        cross={"contact-cross"}
        onClose={() =>console.log("success")}
      />
      </div>
    </div>
  )
};




export const Contacts = () => {
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
              // onClose();
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

  return (
    <div className="contacts">
      <div className="contacts-header">
      <div className="contacts-head">Contacts</div>
      <div className="contacts-subhead">INFO@ZXSIS.COM</div>
      {/* <div className="contacts-follow">
        <div>Follow</div>
        <div></div>
      </div> */}
      </div>
      <div className="contacts-form">
      <form onSubmit={handleSend}>
        <div className="modal-content" style={{boxShadow:"none", padding:"40px 0px"}}>
          <header className="modal-content-header">
            <div>
              <p>Hire us</p>
              <h2>Let us handle your project</h2>
            </div>
          </header>
          <div>
              <p>Services</p>
              <div className="contacts-buttons">
              {["UI/UX Design", "Social Media Design", "Branding and Identity", "SaaS Design" , "Web Development" , "Mobile App Development" ].map((item) => (
              <button className="contacts-button"  key={item}>{item}</button>
            ))}
            </div>
            </div>

            <div>
              <p>Your Budget</p>
              <div className="contacts-buttons">
              {["10K - 50K", "More than 50K", "More than 2 Lakhs"].map((item) => (
              <button className="contacts-button"  key={item}>{item}</button>
            ))}
            </div>
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
          </div>

         
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

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
    </div>
  )
}



export const Quote = () => {
  return (
    <div className="contactUs-page">
    <div className="navbar">
    <Nav/>
    </div>
      <ContactUs/>
      <Contacts/>
    <Footer/>
    </div>
  )
}
