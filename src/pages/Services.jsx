import React, { useEffect } from 'react'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import service4 from '../assets/services-4.jpg'
import service5 from '../assets/services-5.jpg'
import service6 from '../assets/services-6.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import ClientsComponent from '../components/ClientsComponent'
import { Helmet } from 'react-helmet'

const Services = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])

  const services = [
    {
      id: 1,
      title: 'Land Minning',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque in ipsum.',
      img: service1
    },
    {
      id: 2,
      title: 'Building Staffs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum.',
      img: service2
    },
    {
      id: 3,
      title: 'Material Supply',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque in ipsum.',
      img: service3
    },
    {
      id: 4,
      title: 'Conslutancy',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque in ipsum.',
      img: service4
    },
    {
      id: 5,
      title: 'Architecture',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque in ipsum.',
      img: service5
    },
    {
      id: 6,
      title: 'Crane Service',
      description:
        'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Pellentesque in ipsum.',
      img: service6
    }
  ]

  const location = useLocation()
  const isHomeActive = location.pathname === '/'
  // console.log('isHomeActive', isHomeActive)
  return (
    <>
      <Helmet>
        <title>Services - Construction Company </title>
        <meta name='description' content='Welcome to Construction Company' />
      </Helmet>
      <div className='h-full w-full px-1 py-10'>
        {/* <div className='flex flex-col md:items-start items-center space-x-6'> */}
        <div
          className={`flex md:items-center text-center ${
            isHomeActive
              ? 'items-start md:justify-between lg:justify-between'
              : 'items-center  justify-center'
          }    lg:items-center justify-center  md:flex-row  flex-col py-10 space-y-3 px-7`}
        >
          <div className='space-y-5'>
            {' '}
            {isHomeActive ? (
              <h2 className='text-2xl font-bold text-secondary'>
                Build Your Dream
              </h2>
            ) : (
              <h2 className='text-2xl font-bold text-primary'>Our Services</h2>
            )}
            <h1 className='text-4xl font-bold text-secondary'>
              Quality Services
            </h1>
          </div>
          {isHomeActive && (
            <div
              className='flex items-center justify-center gap-3  cursor-pointer'
              onClick={() => navigate('/services')}
            >
              <FaLongArrowAltRight color='#212D45' />{' '}
              <p className='text-xl text-[#212D45]'>View All </p>
            </div>
          )}
          {/* </div> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-7'>
          {services.map(data => (
            <div key={data.id} className='space-y-3 gap-3 pb-10 w-[100]'>
              <img src={data.img} alt={data.title} className='h-60 w-auto ' />
              <h2 className='text-secondary font-bold text-2xl'>
                {data.title}
              </h2>
              <p className='text-[#4B4F58] text-sm md:w-[100] lg:w-[100%] w-[50%]'>
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {!isHomeActive && <ClientsComponent />}
    </>
  )
}

export default Services
