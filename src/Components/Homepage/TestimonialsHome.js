import React from 'react'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialimg1 from '../Images/testimonialimg1.png'
import testimonialimg2 from '../Images/testimonialimg2.png'
import testimonialimg3 from '../Images/testimonialimg3.png'


function TestimonialsHome() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="TestimonialsHome">
            <div className="TestimonialsHomeBox">
                <div className="TestimonialsHomePlate">
                    <div className="TestimonialsHomeHeading1">
                        Elevate Your Career: Where Job Satisfaction Begins!
                    </div>
                    <div className="TestimonialsHomeHeading2">
                        Testimonials from our users
                    </div>
                </div>
                <Slider {...settings}>
                    {TestimonialsHomeData.map((M) => (
                        <div className="TestimonialSlider">
                            <div className="TestimonialSliderBox">
                                <div className="testimonialimg">
                                    <img src={M.testimonialimg} alt='testimonialimg1' className='testimonialimg1' />
                                </div>
                                <div className="testimonialname">
                                    {M.testimonialName}
                                </div>
                                <div className="testimonialLocation">
                                    {M.testimonialLocation}
                                </div>
                                <div className="testimonialRating">

                                </div>
                                <div className="testimonialDecription">
                                    {M.testimonialDecription}
                                </div>
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
const TestimonialsHomeData = [
    {
        id: '1',
        testimonialimg: testimonialimg1,
        testimonialDecription: 'JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. Its user-friendly design made the entire process a breeze.',
        testimonialLocation: 'Dubai, UAE',
        testimonialName: 'Raymond Galario',
    },
    {
        id: '2',
        testimonialimg: testimonialimg2,
        testimonialDecription: 'JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. Its user-friendly design made the entire process a breeze.',
        testimonialLocation: 'Dubai, UAE',
        testimonialName: 'Raymond Galario',
    },
    {
        id: '3',
        testimonialimg: testimonialimg3,
        testimonialDecription: 'JobOwn completely transformed my job search! The sleek and intuitive interface made finding opportunities effortless. Its user-friendly design made the entire process a breeze.',
        testimonialLocation: 'Dubai, UAE',
        testimonialName: 'Raymond Galario',
    },

]

export default TestimonialsHome