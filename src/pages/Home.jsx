import React, { useEffect, useState } from 'react'
import Services from './Services'
import sustain1 from '../assets/sustain1.jpg'
import sustain2 from '../assets/sustain2.jpg'
import founder1 from '../assets/founder1.jpg'
import founder2 from '../assets/founder2.jpg'
import founder3 from '../assets/founder3.jpg'

import latestWork1 from '../assets/latestWork1.jpg'
import latestWork2 from '../assets/latestWork2.jpg'
import latestWork3 from '../assets/latestWork3.jpg'
import latestWork4 from '../assets/latestWork4.jpg'

import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import test4 from '../assets/test4.png'

import {
  FaDesktop,
  FaLongArrowAltRight,
  FaPencilRuler,
  FaRecycle
} from 'react-icons/fa'
import { FaClock, FaMinus, FaPlus } from 'react-icons/fa6'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])

  const navigate = useNavigate()
  const gridCols = [
    { id: 1, projects: '512+', title: 'Successfully finished projects' },
    { id: 2, projects: '25+', title: 'Years of experience with proud' },
    { id: 3, projects: '1120+', title: 'Revenue in 2017 investment' },
    { id: 4, projects: '1520+', title: 'Colleagues & counting more daily' }
  ]

  const BannerImg1 = {
    //   backgroundImage: `url(${hero_img1})`,
    backgroundImage: `linear-gradient(rgba(29, 41, 63, 0.8), rgba(29, 41, 63, 0.8)), url(${sustain1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'h-auto', // Ensure proper height
    width: '100%' // Ensure full width
  }
  const BannerImg2 = {
    //   backgroundImage: `url(${hero_img1})`,
    backgroundImage: `linear-gradient(rgba(249, 196, 89, 0.9), rgba(249, 196, 89, 0.9)), url(${sustain2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'h-auto', // Ensure proper height
    width: '100%' // Ensure full width
  }

  const sustainBoxes = [
    { id: 1, title: 'Canada', des: '4446 Noble Rd, Cortes Island' },
    { id: 2, title: 'United States', des: '2367 Speers Road, Brampton' },
    { id: 3, title: 'Australia', des: '3851 49th Avenue, Kugluktuk' }
  ]
  const founders = [
    { id: 1, name: 'Steven Marks', des: 'CEO', img: founder1 },
    { id: 2, name: 'Lara Smith', des: 'CTO', img: founder2 },
    { id: 3, name: 'John Doe', des: 'COO', img: founder3 }
  ]

  const projects_work = [
    {
      id: 1,
      title: 'Science Lab Building',
      location: 'New York, USA',
      img: latestWork1
    },
    {
      id: 2,
      title: 'Long Gate Bridge',
      location: 'Malmo, SE',
      img: latestWork2
    },
    {
      id: 3,
      title: 'Enix Lawyer Building',
      location: 'Toronto, CA',
      img: latestWork3
    },
    {
      id: 4,
      title: 'Deep Sea Bridge',
      location: 'Athens, GR',
      img: latestWork4
    }
  ]

  const Testimonials = [
    {
      id: 1,
      img: test1,
      role: 'Engineering Manager',
      name: 'Alice Howard',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 2,
      img: test2,
      role: 'Interior Designer',
      name: 'Nathan Marshall',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 3,
      img: test3,
      role: 'Architect',
      name: 'Ema Romero',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 4,
      img: test4,
      role: 'Manager',
      name: 'Ann Smith',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ]

  const questions = [
    {
      id: 1,
      question: 'How to create cities and communites that solve?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 2,
      question: 'Construction of the winning $45 milion?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      id: 3,
      question: 'How to create cities and communites that solve?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <Helmet>
        <title>Home - Construction Company </title>
        <meta name='description' content='Welcome to Construction Company' />
      </Helmet>
      <div className='w-full lg:m-auto  md:flex flex-col lg:mt-[-90px] lg:px-20 md:px-0 pb-5'>
        <div className='grid lg:grid-cols-2 w-full shadow-md'>
          {/* Left Side: Content Box */}
          <div className='w-full lg:h-full py-8 px-12 lg:space-y-8 space-y-3 bg-primary flex flex-col items-start justify-center'>
            <h1 className='text-black font-bold  text-2xl'>Build Your Dream</h1>
            <h2 className='font-bold text-[40px] text-secondary'>
              25 Years of UnDefeated Success
            </h2>
            <p className='text-[#4B4F58]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident asperiores ratione dolor! Numquam neque iure quis
              asperiores rem culpa harum omnis! Illum ea, magni in rem provident
              reprehenderit aspernatur eaque ipsa deserunt, magnam explicabo.
              Facere!
            </p>
            <button
              onClick={() => {
                navigate('/contact-us')
              }}
              className='hidden lg:flex bg-secondary text-white py-3 px-11 hover:bg-secondary'
            >
              WORK WITH US
            </button>
          </div>

          {/* Right Side: Grid Columns */}

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full'>
            {gridCols.map(item => (
              <div
                key={item.id}
                className='bg-white lg:p-11 p-9 md:pl-14 lg:pl-14 pl-7 flex items-start justify-center flex-col space-y-3 lg:space-y-5 border-r-[0.3px] border-t-[0.3px] border-r-gray border-t-gray'
              >
                {/* Project Title */}
                <h3 className='lg:text-5xl text-4xl font-bold text-secondary text-left'>
                  {item.projects}
                </h3>

                {/* Title with last word on the next line */}
                {/* <p className='lg:text-base text-sm text-gray-600'>
                {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className='block'>{item.title.split(' ').slice(-1)}</span>
              </p> */}
                <p className='lg:text-base text-sm text-gray-600'>
                  {item.title.split(' ').slice(0, -1).join(' ')}{' '}
                  <span className='lg:block hidden'>
                    {item.title.split(' ').slice(-1)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <Services />
      </div>
      {/* sustainbility part */}
      <div className='w-full py-2 md:py-10 overflow-hidden'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 w-full  shadow-md '>
          <div
            className='w-full lg:h-full p-6 md:px-24 py-24 space-y-5'
            style={BannerImg1}
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
            style={BannerImg2}
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
      <div className='w-full py-2 md:py-10 lg:px-20 px-10 pt-44 '>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h2 className='text-2xl self-start text-secondary font-bold'>
            Sustainability
          </h2>
          <div className='grid lg:grid-cols-2 grid-cols-1  items-start justify-center  gap-4'>
            <h1 className='text-[#242424] text-4xl font-bold '>
              Transform Communities Across the Globe
            </h1>
            <p className='text-base text-secondary '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10'>
          {sustainBoxes.map(data => (
            <div
              key={data.id}
              className='border border-[#eeeeee] flex items-start justify-start px-10 py-12 flex-col'
            >
              <div className='space-y-3 '>
                <h1 className='text-2xl font-bold text-[#212D45]'>
                  {data.title}
                </h1>
                <p className='text-base text-secondary'>{data.des}</p>
              </div>
              <div className='flex items-center justify-start pt-14 space-x-1 text-[#212D45]'>
                <FaLongArrowAltRight />
                <p>DIRECTION</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <button className=' bg-primary text-secondary py-3 px-11'>
            VIEW OUR OFFICES
          </button>
        </div>
      </div>
      <div className='w-full py-2 md:py:10 lg:px-20  px-10 pt-28'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <h2 className='text-secondary font-bold text-2xl'>About Founders</h2>
          <h2 className='text-[#242424] font-bold text-4xl text-center md:w-[60%]'>
            We Are Leading International Company In The World
          </h2>
        </div>
      </div>
      <div className='w-full h-full pt-10 relative  '>
        <div className='grid grid-cols-1 bg-[#f5f5f5] h-full w-1/2 absolute left-0 py-40  '></div>
        <div className='grid md:grid-cols-3 grid-cols-1 md:px-20 px-10  gap-8 pt-28 pb-32 md:pb-44'>
          {founders.map(data => (
            <div
              key={data.id}
              className=' relative group overflow-hidden shadow-lg '
            >
              <img
                src={data.img}
                alt={data.name}
                className='md:w-[1000px] w-full  md:h-full h-96 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#212D45] via-[#212D4500] to-[#FFFFFF00]'></div>

              <div className='absolute bottom-5 left-8 w-full text-white text-left py-2'>
                <h2 className='font-bold text-white text-2xl'>{data.name}</h2>
                <p className='text-white text-sm'>{data.des}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate('/about')
          }}
          className='absolute bottom-5 md:bottom-16 lg:left-[44%] md:left-[40%] left-[38%]  flex bg-primary text-secondary py-3 px-11 '
        >
          ABOUT US
        </button>
      </div>

      {/* Projects */}
      <div className='w-full h-full pt-20'>
        <div className='flex md:items-center lg:items-center items-start md:justify-between lg:justify-between md:flex-row  flex-col py-10 space-y-6 px-7'>
          <div className='space-y-5'>
            {' '}
            <h2 className='text-2xl font-bold text-secondary'>Our Projects</h2>
            <h1 className='text-4xl font-bold text-secondary'>Latest Work</h1>
          </div>
          <button
            onClick={() => {
              navigate('/projects')
            }}
            className=' bottom-5 md:bottom-16 lg:left-[44%] md:left-[40%] left-[38%]  flex bg-primary text-secondary py-3 px-11'
          >
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
      <div className=' grid md:grid-cols-4 grid-cols-1 md:px-0 px-7 '>
        {projects_work.map(data => (
          <div
            key={data.id}
            className='relative group overflow-hidden shadow-lg'
          >
            <img
              className='md:h-[500px] h-96 w-full object-cover group-hover:scale-105 transition-transform duration-300'
              src={data.img}
              alt='/'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#212D45] via-[#212D4500] to-[#FFFFFF00]'></div>
            <div className=' absolute bottom-10 left-12 w-full text-white text-left py-2'>
              <h2 className='font-bold text-white text-2xl w-[50%]'>
                {data.title}
              </h2>
              <p className='text-white text-base'>{data.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className='h-full w-full pt-10 pb-28'>
        <div className='w-full py-2 md:py:10 lg:px-20  px-10 pt-12'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <h2 className='text-secondary font-bold text-2xl'>
              What Our Clients Say
            </h2>
            <h2 className='text-[#242424] font-bold text-4xl text-center md:w-[60%]'>
              Testimonials
            </h2>
          </div>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 md:px-20 px-6 pt-8 '>
          {Testimonials.map(data => (
            <div key={data.id}>
              <div className='p-10 h-80 w-full flex flex-col space-y-4 items-start justify-start bg-secondary'>
                <img src={data.img} alt={data.name} className='rounded-full ' />
                <h1 className='text-primary text-2xl font-bold'>{data.role}</h1>
                <h1 className='text-white text-2xl font-bold'>{data.name}</h1>
                <p className='text-white text-sm '>{data.des}</p>
              </div>
              <div className='h-[6px] w-full bg-primary'></div>
            </div>
          ))}
        </div>
      </div>

      {/* form */}
      {/* <div className='h-full w-full pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#f5f5f5] pb-28'>
          <div className='lg:px-20 lg:gap-5 bg-secondary  lg:w-[600px] w-full lg:h-[750px] h-full overflow-hidden lg:mt-[-90px]  '>
            <div className='flex flex-col items-start justify-center py-16 lg:px-24 px-8 space-y-8'>
              <h1 className='text-4xl font-bold text-white'>Request a Quote</h1>
              <p className='text-white text-sm'>
                Ready to Work Together? Build a project with us!
              </p>
              <form
                action='#'
                className='space-y-4 grid grid-cols-1 flex-col items-center justify-center'
              >
                <input
                  type='text'
                  className='lg:px-28 px-60 py-3 col-span-2'
                  placeholder='Enter your name'
                />
                <input
                  type='text'
                  className='lg:px-28 py-3 col-span-2'
                  placeholder='Enter your email address'
                />
                <input
                  type='text'
                  className='lg:px-28 py-3 col-span-2'
                  placeholder='Subject'
                />

                <textarea
                  className=' col-span-2'
                  cols={30}
                  rows={10}
                  placeholder='Message'
                ></textarea>
                <button className='  flex w-52 bg-primary text-secondary py-3 px-11 hover:bg-white'>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start px-20 py-16 space-y-5'>
            <h2 className='text-primary font-bold text-2xl'>Learn More From</h2>
            <h2 className='text-secondary font-bold text-5xl'>
              Frequently Asked Questions
            </h2>
          
            <div className='w-full mt-6 space-y-4'>
              {questions.map((item, index) => (
                <div key={item.id} className='border-b border-gray-300 pb-4'>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className='text-lg font-medium'>{item.question}</h3>
                    <span className='text-2xl'>
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-in-out ${
                      activeIndex === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className='mt-2 text-gray-600'>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className='h-full w-full pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#f5f5f5] pb-28'>
          <div className='lg:px-20 lg:gap-5 bg-secondary lg:w-[600px] w-full lg:h-[750px] h-full overflow-hidden lg:mt-[-90px]'>
            <div className='flex flex-col items-start justify-center py-16 lg:px-24 px-8 space-y-8'>
              <h1 className='text-4xl font-bold text-white'>Request a Quote</h1>
              <p className='text-white text-sm'>
                Ready to Work Together? Build a project with us!
              </p>
              <form
                action='#'
                className='space-y-4 grid grid-cols-1 flex-col items-center justify-center'
              >
                <input
                  type='text'
                  className='w-full py-3 px-4 rounded-md text-black'
                  placeholder='Enter your name'
                />
                <input
                  type='text'
                  className='w-full py-3 px-4 rounded-md text-black'
                  placeholder='Enter your email address'
                />
                <input
                  type='text'
                  className='w-full py-3 px-4 rounded-md text-black'
                  placeholder='Subject'
                />
                <textarea
                  className='w-full py-3 px-4 rounded-md text-black'
                  cols={30}
                  rows={5}
                  placeholder='Message'
                ></textarea>
                <button className='flex w-full bg-primary text-secondary py-3 px-4 hover:bg-white rounded-md justify-center'>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start px-20 py-16 space-y-5'>
            <h2 className='text-primary font-bold text-2xl'>Learn More From</h2>
            <h2 className='text-secondary font-bold text-5xl'>
              Frequently Asked Questions
            </h2>
            <div className='w-full mt-6 space-y-4'>
              {questions.map((item, index) => (
                <div key={item.id} className='border-b border-gray-300 pb-4'>
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className='text-lg font-medium'>{item.question}</h3>
                    <span className='text-2xl'>
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-600 ease-in-out ${
                      activeIndex === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className='mt-2 text-gray-600'>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      <div className='h-full w-full pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#f5f5f5] pb-28 lg:gap-x-10 md:pl-0 lg:pl-20'>
          {/* Left Section */}
          <div className='lg:flex-grow bg-secondary w-full h-auto overflow-hidden lg:mt-[-60px]'>
            <div className='flex flex-col items-start justify-center py-16 lg:px-10 px-8 space-y-8'>
              <h1 className='text-4xl font-bold text-white'>Request a Quote</h1>
              <p className='text-white text-sm'>
                Ready to Work Together? Build a project with us!
              </p>
              <form action='#' className='space-y-4 w-full'>
                {/* Input Fields */}
                <input
                  type='text'
                  className='w-full py-3 px-4 text-black border border-gray-300 '
                  placeholder='Enter your name'
                />
                <input
                  type='email'
                  className='w-full py-3 px-4 text-black border border-gray-300 '
                  placeholder='Enter your email address'
                />
                <input
                  type='text'
                  className='w-full py-3 px-4 text-black border border-gray-300 '
                  placeholder='Subject'
                />
                <textarea
                  className='w-full py-3 px-4 text-black border border-gray-300 '
                  rows={5}
                  placeholder='Message'
                ></textarea>
                {/* Submit Button */}
                <button className=' bg-primary text-secondary py-3 px-4 hover:bg-white '>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start px-10 lg:px-10 py-16 space-y-5'>
            <h2 className='text-primary font-bold text-2xl'>Learn More From</h2>
            <h2 className='text-secondary font-bold text-5xl pb-4'>
              Frequently Asked Questions
            </h2>
            <div className='w-full mt-6 '>
              {questions.map((item, index) => (
                <div
                  key={item.id}
                  className='border border-gray-300 p-4 w-full'
                >
                  {/* Question */}
                  <div
                    className='flex justify-between items-center cursor-pointer'
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className='text-base text-secondary font-bold'>
                      <span className='text-base font-bold text-secondary'>
                        {item.id}.{' '}
                      </span>
                      {item.question}
                    </h3>
                    <span className='text-2xl text-secondary'>
                      {activeIndex === index ? (
                        <FaMinus size={'15px'} />
                      ) : (
                        <FaPlus size={'15px'} />
                      )}
                    </span>
                  </div>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index
                        ? 'max-h-40 opacity-100 mt-3'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className='text-secondary text-sm'>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
