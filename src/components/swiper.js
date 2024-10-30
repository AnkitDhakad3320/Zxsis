// SwiperComponent.js
import React, { useEffect } from 'react';

const SwiperComponent = () => {
    useEffect(() => {
        // Dynamically load Swiper's CSS and JS
        const loadSwiper = () => {
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.css';
            document.head.appendChild(cssLink);

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js';
            script.onload = () => {
                // Initialize Swiper after the script loads
                new window.Swiper('.mySwiper', {
                    slidesPerView: 1,
                    spaceBetween: 50,
                    loop: true,
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            };
            document.body.appendChild(script);
        };

        loadSwiper();

        // Cleanup: remove script on unmount
        return () => {
            const swiperScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/swiper@latest/swiper-bundle.min.js"]');
            if (swiperScript) {
                document.body.removeChild(swiperScript);
            }
        };
    }, []);

    // Demo slide data
    const slides = [
        {
            id: 1,
            title: "Slide 1",
            description: "This is the first slide description.",
            imageUrl: "https://via.placeholder.com/600x300?text=Slide+1",
        },
        {
            id: 2,
            title: "Slide 2",
            description: "This is the second slide description.",
            imageUrl: "https://via.placeholder.com/600x300?text=Slide+2",
        },
        {
            id: 3,
            title: "Slide 3",
            description: "This is the third slide description.",
            imageUrl: "https://via.placeholder.com/600x300?text=Slide+3",
        },
        {
            id: 3,
            title: "Slide 3",
            description: "This is the third slide description.",
            imageUrl: "https://via.placeholder.com/600x300?text=Slide+3",
        },
        {
            id: 3,
            title: "Slide 3",
            description: "This is the third slide description.",
            imageUrl: "https://via.placeholder.com/600x300?text=Slide+3",
        },
    ];

    return (
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {slides.map(slide => (
                    <div className="swiper-slide" key={slide.id}>
                        <img src={slide.imageUrl} alt={slide.title} />
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>
            {/* Pagination and Navigation */}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev">Prev</div>
            <div className="swiper-button-next">Next</div>
        </div>
    );
};

export default SwiperComponent;
