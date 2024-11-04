import React, { useEffect, useRef } from 'react';
import "./Home/Home.css";

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
  // Add more testimonials as needed...
];

const TestimonialsSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadSwiper = () => {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.css';
      document.head.appendChild(cssLink);

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js';
      script.onload = () => {
        swiperRef.current = new window.Swiper('.mySwiper', {
          slidesPerView: 2,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        // Automatic slide transition
        const interval = setInterval(() => {
          swiperRef.current.slideNext();
        }, 15000);

        return () => clearInterval(interval);
      };
      document.body.appendChild(script);
    };

    loadSwiper();

    return () => {
      const swiperScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js"]');
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
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial) => (
            <div className="swiper-slide testimonial-card" key={testimonial.id}>
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
        {/* Pagination and Navigation */}
        <div className="swiperArrow">
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev swipe-left"> </div>
        <div className="swiper-button-next swipe-right"> </div>
        </div>
        
      </div>
    </div>
  );
};

export default TestimonialsSwiper;
