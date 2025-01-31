import React, { useState } from 'react'
import hero_img1 from '../assets/hero-image1.jpg'
import hero_img2 from '../assets/hero_image2.jpg'
import { GiBrickWall } from 'react-icons/gi'
import urbanlogo from '../assets/urban_logo.png'
import {
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare
} from 'react-icons/fa'
import {
  FaFacebookF,
  FaSquareInstagram,
  FaSquareTwitter
} from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

const BannerImg1 = {
  //   backgroundImage: `url(${hero_img1})`,
  backgroundImage: `linear-gradient(rgba(38, 50, 70, 0.9), rgba(38, 50, 70, 0.9)), url(${hero_img1})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'h-auto', // Ensure proper height
  width: '100%' // Ensure full width
}
const BannerImg2 = {
  //   backgroundImage: `url(${hero_img1})`,
  backgroundImage: `linear-gradient(rgba(38, 50, 70, 0.8), rgba(38, 50, 70, 0.8)), url(${hero_img2})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: 'h-auto', // Ensure proper height
  width: '100%' // Ensure full width
}

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const isActive = path => {
    // console.log('path', path, 'location path', location.pathname)
    // Check for Users path including details
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  //   console.log('isActive', isActive)

  const isHomeActive = location.pathname === '/'
  // console.log('isHomeActive', isHomeActive)
  return (
    <div
      style={location.pathname === '/' ? BannerImg1 : BannerImg2}
      className={` bg-[#263246] ${isHomeActive ? 'pb-36' : 'pb-2'}`}
    >
      <div className='lg:px-20 md:px-6 sm:px-6 px-4 py-3 flex flex-row items-center justify-between'>
        <img
          src={urbanlogo}
          alt='logo'
          className='w-20 h-auto sm:w-25 md:w-25 lg:w-auto'
        />
        <p className='hidden md:flex text-primary text-base'>
          Make a Call:+1 (212) 255-5511
        </p>
        {/* <div className='hidden md:flex items-center space-x-4'>
          <FaFacebookSquare
            className=' text-xl text-[#263246] bg-[#FFC03D] hover:bg-white '
            size={'25px'}
          />

          <FaSquareTwitter
            className=' text-xl text-[#263246] bg-[#FFC03D] hover:bg-white '
            size={'25px'}
          />

          <FaSquareInstagram
            className=' text-xl text-[#263246] bg-[#FFC03D] hover:bg-white '
            size={'25px'}
          />

          <FaLinkedin
            className=' text-xl text-[#263246] bg-[#FFC03D] hover:bg-white '
            size={'25px'}
          />
        </div> */}
        <div className='hidden md:flex items-center space-x-4'>
          {/* Facebook Icon */}
          <div className='flex items-center justify-center  rounded-sm  hover:bg-white transition duration-300'>
            <FaFacebookSquare
              size={'25px'}
              className='text-[#263246] text-base'
              fill='#FFC03D'
            />
          </div>

          {/* Twitter Icon */}
          {/* <div className='flex items-center justify-center  hover:bg-white transition duration-300'> */}
          <FaTwitterSquare
            size={'25px'}
            className='text-[#263246] hover:bg-white text-xl'
            fill='#FFC03D'
          />
          {/* </div> */}

          {/* Instagram Icon */}
          <div className='flex items-center justify-center w-6 h-6 rounded-sm hover:bg-white transition duration-300'>
            <FaInstagramSquare
              size={'25px'}
              className='text-[#263246] text-base'
              fill='#FFC03D'
            />
          </div>

          {/* LinkedIn Icon */}
          <div className='flex items-center justify-center w-6 h-6  rounded-sm hover:bg-white transition duration-300'>
            <FaLinkedin
              size={'25px'}
              className='text-[#263246] text-base'
              fill='#FFC03D'
            />
          </div>
        </div>

        {/* HamBurger Menu */}
        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? (
            <IoMdClose size={30} className='mr-2 cursor-pointer text-primary' />
          ) : (
            <FaBars size={20} className='mr-2 cursor-pointer text-primary' />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            nav
              ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute  left-0 top-20 w-full h-72 bg-white px-4 py-1 flex flex-col'
              : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
          }
        >
          <ul className='h-20 w-full '>
            {['/', '/projects', '/services', '/about', '/contact-us'].map(
              (path, index) => (
                // console.log(path),
                <li key={index} className='py-4'>
                  <a
                    href={path}
                    className={`capitalize ${
                      isActive(path) ? 'text-primary' : 'text-gray-600'
                    } hover:text-primary`}
                  >
                    {path === '/' ? 'Home' : path.slice(1).replace('-', ' ')}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className=' hidden md:flex w-full h-[0.5px] bg-gray-500'></div>
      <div className='hidden md:flex  items-center justify-between lg:px-20 py-6 '>
        <ul className='hidden sm:flex  px-4 space-x-10'>
          {['/', '/projects', '/services', '/about', '/contact-us'].map(
            (path, index) => (
              // console.log(path),
              <li key={index} className='py-4 hover:text-primary '>
                <a
                  href={path}
                  className={`capitalize ${
                    isActive(path) ? 'text-primary' : 'text-white'
                  } hover:text-primary`}
                >
                  {path === '/' ? 'Home' : path.slice(1).replace('-', ' ')}
                </a>
              </li>
            )
          )}
        </ul>
        <button className='bg-primary text-black text-base  px-10 py-3 items-center font-montserrat'>
          GET A QUOTE
        </button>
      </div>
      {isHomeActive ? (
        <div className='lg:px-20 md:px-6 sm:px-6 px-4 lg:py-32 sm:py-10 py-10 flex flex-col items-start justify-between space-y-9'>
          <h2 className='text-primary font-bold text-2xl font-montserrat'>
            Build Your Dream
          </h2>
          <h1 className='text-white  md:text-8xl text-[35px] sm:text[60px] font-bold font-montserrat'>
            Vision Got Larger
          </h1>
          <p className='text-white font-base md:w-[60%] sm:w-[80%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            facilis voluptate, libero unde, quaerat optio deserunt provident
            dolore doloribus, a sapiente non mollitia accusantium at laudantium
            recusandae sed soluta laboriosam?
          </p>
          {/* <div className='flex sm:flex-row flex-col space-x-20'>
            <button className='bg-primary px-9 py-3'>OUR SERVICES</button>
            <button className=' px-9 py-3 hover:bg-primary border-white text-white border-[1px] hover:text-black hover:border-0'>
              CONTACT US
            </button>
          </div> */}
          <div className='flex flex-col sm:flex-row sm:space-x-20 space-y-4 sm:space-y-0'>
            <button
              onClick={() => {
                navigate('/services')
              }}
              className='bg-primary px-11 py-3'
            >
              OUR SERVICES
            </button>
            <button
              onClick={() => {
                navigate('/contact-us')
              }}
              className='px-11 py-3 hover:bg-primary border-white text-white border-[1px] hover:text-black hover:border-0'
            >
              CONTACT US
            </button>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <h1 className='capitalize text-white text-5xl sm:text-7xl md:text-8xl py-24 font-montserrat font-bold'>
            {/* {location.pathname.split('/')} */}
            {location.pathname
              .split('/') // Split the path by '/'
              .filter(Boolean) // Remove empty strings
              .map(word => word.replace('-', ' ')) // Replace hyphens with spaces
              .join(' ')}{' '}
            {/* Join the processed words */}
          </h1>
        </div>
      )}
    </div>
  )
}

export default Header
