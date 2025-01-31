import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-full h-full bg-secondary flex flex-col'>
      <div className='space-y-10'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:pt-20 p-7 md:p-20 '>
          <div className='flex flex-col items-center justify-start gap-6 pb-5 md:pb-0 '>
            <h2 className='text-white text-xl font-bold self-start'>
              Build With Urban Nest
            </h2>
            <p className='text-white text-sm w-[80%] self-start'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate dolore, debitis ullam nihil ipsam repudiandae.
            </p>
            <div className='self-start'>
              <p className='text-white text-sm'>Mon - Sat 8:00 - 17:30,</p>
              <p className='text-white text-sm'>Sunday - CLOSED</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start gap-6 pb-5  md:pb-0'>
            <h2 className='text-white text-xl font-bold self-start'>
              Our Services
            </h2>
            <ul className='self-start'>
              <li>
                <a
                  href='#'
                  className='text-white text-sm cursor-pointer hover:text-primary'
                >
                  Chemical Engineering Projects
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white text-sm cursor-pointer hover:text-primary'
                >
                  Mining Engineering Construction
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white text-sm cursor-pointer hover:text-primary'
                >
                  Engineering Welding Engineering
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white text-sm cursor-pointer hover:text-primary'
                >
                  Welding Engineering
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white text-sm cursor-pointer hover:text-primary'
                >
                  Space Program XYZ
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center justify-start gap-6 pb-5  md:pb-0'>
            <h2 className='text-white text-xl font-bold self-start'>
              Office in Canada
            </h2>

            <div className='self-start'>
              <p className='text-white text-sm'>7300-7398 Colonial Rd,</p>
              <p className='text-white text-sm'>Brooklyn, NY 11209</p>
            </div>
            <div className='self-start'>
              <p className='text-white text-sm'>(123) 1234-567-8901</p>
              <p className='text-white text-sm'>(123) 1234-567-8902</p>
              <p className='text-white text-sm'>office@example.com</p>
              <p className='text-white text-sm'>contact@example.com</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start gap-6  md:pb-0'>
            <h2 className='text-white text-xl font-bold self-start'>
              Our Locations
            </h2>

            <div className='self-start'>
              <p className='text-white text-sm'>United States</p>
              <p className='text-white text-sm'>Australia</p>
              <p className='text-white text-sm'>Canada</p>
              <p className='text-white text-sm'>Europe</p>
            </div>
          </div>
        </div>
        <div className='h-[0.2px] w-full bg-gray-600'></div>
        <div className='flex items-center justify-between flex-col md:flex-row px-7 md:px-20 py-5 gap-3'>
          <p className='text-white text-sm'>
            Copyright © 2025 Construction Company
          </p>
          {/* <div className=' flex flex-row items-center space-x-4'>
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
          <div className='  flex flex-row items-center space-x-4'>
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
        </div>
      </div>
    </div>
  )
}

export default Footer
