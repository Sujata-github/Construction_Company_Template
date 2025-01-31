import React from 'react'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'
import logo5 from '../assets/logo5.svg'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ClientsComponent = () => {
  const clients = [logo1, logo2, logo3, logo4, logo5]

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='py-28'>
      <div className='space-y-5 flex items-center justify-center flex-col pb-6'>
        <h2 className='font-bold text-primary text-2xl'>Trust and Worth</h2>
        <h1 className='font-bold text-[#242424] text-5xl'>Our Clients</h1>
      </div>
      <div className='md:px-20 px-10 md:pl-28 py-16 '>
        <Slider {...settings}>
          {clients.map((logo, index) => (
            <div key={index} className='flex items-center justify-center '>
              <img
                src={logo}
                alt='Client Logo'
                className='object-contain  max-w-xs mx-auto'
                // className=' object-contain'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ClientsComponent
