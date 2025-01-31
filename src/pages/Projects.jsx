import React, { useEffect } from 'react'
import latestWork1 from '../assets/latestWork1.jpg'
import latestWork2 from '../assets/latestWork2.jpg'
import latestWork3 from '../assets/latestWork3.jpg'
import latestWork4 from '../assets/latestWork4.jpg'
import latestWork5 from '../assets/latestWork5.jpg'
import latestWork6 from '../assets/latestWork6.jpg'
import latestWork7 from '../assets/latestWork7.jpg'
import latestWork8 from '../assets/latestWork8.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ClientsComponent from '../components/ClientsComponent'
import { Helmet } from 'react-helmet'

const Projects = () => {
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
    },
    {
      id: 5,
      title: 'Car Tech Building',
      location: 'Denver, USA',
      img: latestWork5
    },
    {
      id: 6,
      title: 'Nctech Building',
      location: 'Texas, USA',
      img: latestWork6
    },
    {
      id: 7,
      title: 'Vax Tech Building',
      location: 'Ontario, CA',
      img: latestWork7
    },
    {
      id: 8,
      title: 'Food Lab Building',
      location: 'Athens, GR',
      img: latestWork8
    }
  ]
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  return (
    <>
      <Helmet>
        <title>Projects - Construction Company </title>
        <meta name='description' content='Welcome to Construction Company' />
      </Helmet>

      <div className='w-full h-full py-14'>
        <div className='space-y-5 flex items-center justify-center flex-col pb-10'>
          <h2 className='font-bold text-primary text-xl'>Our Projects</h2>
          <h1 className='font-bold text-[#242424] text-4xl'> Latest Work</h1>
        </div>
        <div className=' p-4 lg:p-0 grid md:grid-cols-4 grid-cols-1   '>
          {projects_work.map(data => (
            <div
              key={data.id}
              className='relative group overflow-hidden shadow-lg'
            >
              <img
                className='md:h-full h-96 w-full object-cover group-hover:scale-105 transition-transform duration-300'
                src={data.img}
                alt='/'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#212D45] via-[#212D4500] to-[#FFFFFF00]'></div>
              <div className=' absolute  w-full bottom-10 left-12 text-white text-left py-2'>
                <h2 className='font-bold text-white text-2xl w-[50%]'>
                  {data.title}
                </h2>
                <p className='text-white text-base w-[50%]'>{data.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className='py-28'>
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
      </div> */}
        <ClientsComponent />
      </div>
    </>
  )
}

export default Projects
