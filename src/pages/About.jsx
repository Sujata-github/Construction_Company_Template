import React, { useEffect } from 'react'
import {
  FaAward,
  FaDollarSign,
  FaHouseUser,
  FaLandmark,
  FaProjectDiagram,
  FaUser,
  FaUsers
} from 'react-icons/fa'
import { FaBuilding, FaRegBuilding } from 'react-icons/fa6'
import { FaDesktop, FaPencilRuler, FaRecycle } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import about_us_fire from '../assets/about-us-fire.jpg'
import expert1 from '../assets/expert1.jpeg'
import expert2 from '../assets/expert2.jpeg'
import expert3 from '../assets/expert3.jpeg'
import expert4 from '../assets/expert4.jpeg'
import sustain1 from '../assets/sustain1.jpg'
import sustain2 from '../assets/sustain2.jpg'
import ClientsComponent from '../components/ClientsComponent'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])

  const navigate = useNavigate()
  const BannerImg1 = {
    //   backgroundImage: `url(${hero_img1})`,
    backgroundImage: `linear-gradient(rgba(38, 50, 70, 0.9), rgba(38, 50, 70, 0.9)), url(${about_us_fire})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'h-auto', // Ensure proper height
    width: '100%' // Ensure full width
  }
  const BannerImg2 = {
    //   backgroundImage: `url(${hero_img1})`,
    backgroundImage: `linear-gradient(rgba(29, 41, 63, 0.8), rgba(29, 41, 63, 0.8)), url(${sustain1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'h-auto', // Ensure proper height
    width: '100%' // Ensure full width
  }
  const BannerImg3 = {
    //   backgroundImage: `url(${hero_img1})`,
    backgroundImage: `linear-gradient(rgba(249, 196, 89, 0.9), rgba(249, 196, 89, 0.9)), url(${sustain2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'h-auto', // Ensure proper height
    width: '100%' // Ensure full width
  }
  const services = [
    {
      id: 1,
      title: 'Mike Rich',
      role: 'Lead Architect',
      img: expert1
    },
    {
      id: 2,
      title: 'Jenny Smith',
      role: 'Head Engineer (US)',
      img: expert2
    },
    {
      id: 3,
      title: 'George Doe',
      role: 'Head Engineer (CN)',
      img: expert3
    },
    {
      id: 4,
      title: 'Maria Jay',
      role: 'Head Engineer (AU)',
      img: expert4
    }
  ]
  return (
    <>
      <Helmet>
        <title>About - Construction Company </title>
        <meta name='description' content='Welcome to Construction Company' />
      </Helmet>

      <div className='h-full w-full py-20 md:px-16 px-6'>
        <h2 className='font-bold text-2xl text-primary'>About Us</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 space-y-14 lg:gap-28 '>
          <div className='pt-8 space-y-14'>
            <div className='space-y-10'>
              <h1 className='font-bold text-secondary text-4xl'>
                We Are Leading International Company In The World
              </h1>
              <p className='text-[#4B4F58] text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className='text-[#4B4F58] text-base'>
                Cras ultricies ligula sed magna dictum porta. Curabitur non
                nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Curabitur arcu
                erat, accumsan id imperdiet et, porttitor at sem.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/services')
              }}
              className='  flex bg-primary text-secondary py-3 px-11 '
            >
              OUR SERVICES
            </button>
          </div>
          <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-row items-center justify-between gap-4 w-full'>
              <div className='self-start'>
                <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                  <FaRegBuilding
                    size={25}
                    color='white'
                    className='hover:text-gray-700'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center justify-start space-x-4 space-y-3'>
                <h1 className='font-bold text-2xl self-start pl-3 text-[#212D45]'>
                  Building Staffs
                </h1>
                <p className='text-[#212D45] text-base text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-4 w-full'>
              <div className='self-start'>
                <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                  <FaLandmark
                    size={25}
                    color='white'
                    className='hover:text-gray-700'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center justify-start space-x-4 space-y-3'>
                <h1 className='font-bold text-2xl self-start pl-3 text-[#212D45]'>
                  History Emphasis
                </h1>
                <p className='text-[#212D45] text-base text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between gap-4 w-full'>
              <div className='self-start'>
                <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                  <FaHouseUser
                    size={25}
                    color='white'
                    className='hover:text-gray-700'
                  />
                </div>
              </div>
              <div className='flex flex-col items-center justify-start space-x-4 space-y-3'>
                <h1 className='font-bold text-2xl self-start pl-3 text-[#212D45]'>
                  Economic Outcomes
                </h1>
                <p className='text-[#212D45] text-base text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={BannerImg1}>
        <div className='w-full grid lg:grid-cols-4 grid-cols-1 space-y-14 lg:gap-14 px-20 py-12'>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-4 space-y-8 '>
            <div className='lg:self-start pt-3'>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                <FaDollarSign
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col items-center lg:justify-start justify-center lg:space-x-4 space-y-3'>
              <h1 className='font-bold text-3xl lg:self-start lg:pl-3 text-white'>
                325
              </h1>
              <p className='text-white text-sm text-left'>
                Revenue in 2017 (Million)
              </p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-4 space-y-5'>
            <div className='lg:self-start pt-3'>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                <FaUsers
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col items-center lg:justify-start justify-center lg:space-x-4 space-y-3'>
              <h1 className='font-bold text-3xl lg:self-start lg:pl-3 text-white'>
                525
              </h1>
              <p className='text-white text-sm text-left'>
                Collaegues & Counting
              </p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-4 space-y-5'>
            <div className='lg:self-start pt-3'>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                <FaProjectDiagram
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col items-center lg:justify-start justify-center lg:space-x-4 space-y-3'>
              <h1 className='font-bold text-3xl lg:self-start lg:pl-3 text-white'>
                302
              </h1>
              <p className='text-white text-sm text-left'>
                Successfully Project
              </p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-4 space-y-5 '>
            <div className='lg:self-start pt-3'>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center '>
                <FaAward
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col items-center lg:justify-start justify-center lg:space-x-4 space-y-3'>
              <h1 className='font-bold text-3xl lg:self-start lg:pl-3 text-white'>
                25
              </h1>
              <p className='text-white text-sm text-left'>Year of experience</p>
            </div>
          </div>
        </div>
      </div> */}
      <div style={BannerImg1}>
        <div className='w-full grid lg:grid-cols-4 grid-cols-1 gap-14 px-20 py-28'>
          {/* First item */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 space-y-8 lg:space-y-0'>
            <div className='lg:self-start '>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center'>
                <FaDollarSign
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col lg:items-start items-center gap-1'>
              <h1 className='font-bold text-4xl text-white'>325</h1>
              <p className='text-white text-sm text-center lg:text-left'>
                Revenue in 2017 (Million)
              </p>
            </div>
          </div>

          {/* Second item */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 space-y-8 lg:space-y-0'>
            <div className='lg:self-start '>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center'>
                <FaUsers
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col lg:items-start items-center gap-1'>
              <h1 className='font-bold text-4xl text-white'>525</h1>
              <p className='text-white text-sm text-center lg:text-left'>
                Colleagues & Counting
              </p>
            </div>
          </div>

          {/* Third item */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 space-y-8 lg:space-y-0'>
            <div className='lg:self-start '>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center'>
                <FaProjectDiagram
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col lg:items-start items-center gap-1'>
              <h1 className='font-bold text-4xl text-white '>302</h1>
              <p className='text-white text-sm text-center lg:text-left'>
                Successfully Project
              </p>
            </div>
          </div>

          {/* Fourth item */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start lg:gap-4 space-y-8 lg:space-y-0'>
            <div className='lg:self-start '>
              <div className='h-12 w-12 rounded-full bg-primary flex items-center justify-center'>
                <FaAward
                  size={25}
                  color='white'
                  className='hover:text-gray-700'
                />
              </div>
            </div>
            <div className='flex flex-col lg:items-start items-center gap-1'>
              <h1 className='font-bold text-4xl text-white '>25</h1>
              <p className='text-white text-sm text-center lg:text-left'>
                Year of experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full pt-28'>
        <div className='space-y-5 flex items-center justify-center flex-col '>
          <h2 className='font-bold text-primary text-2xl'>The Team</h2>
          <h1 className='font-bold text-[#242424] text-4xl'> Our Experts</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 lg:p-20 md:p-4 items-center justify-center '>
          {services.map(data => (
            <div
              key={data.id}
              className='space-y-2 gap-1 pb-10 flex flex-col items-center justify-center '
            >
              <img
                src={data.img}
                alt={data.title}
                className='h-auto w-[120] '
              />
              {/* <div className='flex flex-col items-center justify-center'> */}
              <h2 className='text-secondary font-bold text-2xl'>
                {data.title}
              </h2>
              <p className='text-[#4B4F58] text-sm '>{data.role}</p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full py-2 md:py-10 overflow-hidden'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 w-full  shadow-md '>
          <div
            className='w-full lg:h-full p-6 md:px-24 py-24 space-y-5'
            style={BannerImg2}
          >
            <div className='space-y-7 pb-10 '>
              <h2 className='text-primary font-bold text-2xl'>
                Sustainability
              </h2>
              <h1 className='text-white font-bold text-4xl'>
                Committed To Keep People Healthy & Safe
              </h1>
              <p className='text-white text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque in ipsum id orci porta dapibus.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/contact-us')
              }}
              className='  flex bg-primary text-secondary py-3 px-11 '
            >
              GET IN TOUCH
            </button>
          </div>
          <div
            className='w-full lg:h-full p-6 md:px-24 py-24 space-y-6'
            style={BannerImg3}
          >
            <h2 className='text-[#242424] font-bold text-2xl'>
              We Follow Best Practices
            </h2>
            <p className='text-[#121212] text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus.
            </p>

            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <FaRecycle size={20} color='#4B4F58' />
                <p className='text-[#212D45] text-xl font-bold'>
                  Sustainablility
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <FaClock size={20} color='#4B4F58' />
                <p className='text-[#212D45] text-xl font-bold'>
                  Project On Time
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <FaDesktop size={20} color='#4B4F58' />
                <p className='text-[#212D45] text-xl font-bold'>
                  Modern Technology
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <FaPencilRuler size={20} color='#4B4F58' />
                <p className='text-[#212D45] text-xl font-bold'>
                  Latest Designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClientsComponent />
    </>
  )
}

export default About
