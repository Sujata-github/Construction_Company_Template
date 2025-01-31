import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  return (
    <>
      <Helmet>
        <title>Contact - Construction Company </title>
        <meta name='description' content='Welcome to Construction Company' />
      </Helmet>
      <div className='h-full w-full py-20 lg:px-24 px-3 '>
        <div className='space-y-5 pb-20'>
          <div className='flex items-center justify-center flex-col'>
            <h2 className='font-bold text-2xl text-primary'>Our Braches</h2>
            <h2 className='font-bold text-4xl text-secondary'>
              Contact Details
            </h2>
          </div>
          <div className='grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 space-y-14  pt-4 w-full h-full pb-20'>
            <div className='pt-8 space-y-14 col-span-2'>
              <div className='space-y-10'>
                <h1 className='font-bold text-secondary text-2xl'>
                  Canada Head Office
                </h1>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Address</h1>
                  <p className='text-[#4B4F58] text-base w-[80%]'>
                    75 Tower Court Kernersville, NC 27284 PO Box 6658 Rockhild
                    SDT 2505
                  </p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Phone:</h1>
                  <p className='text-[#4B4F58] text-base'>+1 (238) 456 7894</p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Email:</h1>
                  <p className='text-[#4B4F58] text-base'>
                    contact@example.com
                  </p>
                  <p className='text-[#4B4F58] text-base'>
                    support@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate('/contact-us')
                }}
                className='  flex bg-primary text-secondary py-3 px-11 '
              >
                GET APPOINTEMENT
              </button>
            </div>
            {/* Google Map Embed */}
            <div className='flex flex-col  w-full col-span-3 pt-[-20px] '>
              <iframe
                title='Toronto Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.360745404469!2d-79.38318668427203!3d43.65348157912139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d8b4792f07%3A0x50ce1888c00024!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1696688141911!5m2!1sen!2sus'
                width='100%'
                // height='400'
                className='h-full'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='h-[1px] w-full bg-[#eeeaea] '></div>
          <div className='grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 space-y-14  pt-4 w-full h-full pb-20'>
            <div className='pt-8 space-y-14 col-span-2'>
              <div className='space-y-10'>
                <h1 className='font-bold text-secondary text-2xl'>
                  Denver Head Office
                </h1>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Address</h1>
                  <p className='text-[#4B4F58] text-base w-[80%]'>
                    75 Tower Court Kernersville, NC 27284 PO Box 6658 Rockhild
                    SDT 2505
                  </p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Phone:</h1>
                  <p className='text-[#4B4F58] text-base'>+1 (238) 456 7894</p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Email:</h1>
                  <p className='text-[#4B4F58] text-base'>
                    contact@example.com
                  </p>
                  <p className='text-[#4B4F58] text-base'>
                    support@example.com
                  </p>
                </div>
              </div>
              <button className='  flex bg-primary text-secondary py-3 px-11 hover:bg-primary'>
                GET APPOINTEMENT
              </button>
            </div>
            {/* Google Map Embed */}
            <div className='flex flex-col  w-full col-span-3 pt-[-20px] '>
              <iframe
                title='Toronto Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.360745404469!2d-79.38318668427203!3d43.65348157912139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d8b4792f07%3A0x50ce1888c00024!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1696688141911!5m2!1sen!2sus'
                width='100%'
                // height='400'
                className='h-full'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
          <div className='h-[1px] w-full bg-[#eeeaea] '></div>
          <div className='grid lg:grid-cols-5 md:grid-cols-1 grid-cols-1 space-y-14  pt-4 w-full h-full '>
            <div className='pt-8 space-y-14 col-span-2'>
              <div className='space-y-10'>
                <h1 className='font-bold text-secondary text-2xl'>
                  Malmo head office
                </h1>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Address</h1>
                  <p className='text-[#4B4F58] text-base w-[80%]'>
                    75 Tower Court Kernersville, NC 27284 PO Box 6658 Rockhild
                    SDT 2505
                  </p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Phone:</h1>
                  <p className='text-[#4B4F58] text-base'>+1 (238) 456 7894</p>
                </div>
                <div className='flex flex-col '>
                  <h1 className='font-bold text-secondary text-2xl'>Email:</h1>
                  <p className='text-[#4B4F58] text-base'>
                    contact@example.com
                  </p>
                  <p className='text-[#4B4F58] text-base'>
                    support@example.com
                  </p>
                </div>
              </div>
              <button className='  flex bg-primary text-secondary py-3 px-11 hover:bg-primary'>
                GET APPOINTEMENT
              </button>
            </div>
            {/* Google Map Embed */}
            <div className='flex flex-col  w-full col-span-3 pt-[-20px] '>
              <iframe
                title='Toronto Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.360745404469!2d-79.38318668427203!3d43.65348157912139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d8b4792f07%3A0x50ce1888c00024!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1696688141911!5m2!1sen!2sus'
                width='100%'
                // height='400'
                className='h-full'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
