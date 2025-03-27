'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Image from 'next/image'
import cat from '@/app/assets/image.png'
import emoji1 from '@/app/assets/emjoji1.png'
import emoji2 from '@/app/assets/emjoji2.png'
import emoji3 from '@/app/assets/emjoji3.png'
import emoji4 from '@/app/assets/emjoji4.png'
// import emoji5 from '@/app/assets/emjoji5.png'
import emoji6 from '@/app/assets/emjoji6.png'
import emoji7 from '@/app/assets/emjoji7.png'
import emoji8 from '@/app/assets/emjoji8.png'
import logo from '@/app/assets/logo.png'
import images8a from '@/app/assets/images8a.png'
import images9 from '@/app/assets/images9.png'
import images10 from '@/app/assets/images10.png'
import images11 from '@/app/assets/images11.png'
import hamza_footer from '@/app/assets/footer/image.png'
import { FaTiktok, FaInstagram, FaGithub } from 'react-icons/fa'
import { PiButterflyThin } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { FaAt } from 'react-icons/fa6'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [description, setDescription] = useState('')

  // ==================================================
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ==================================================

  const emojis = [
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    ,
    images8a,
    images9,
    images10,
    images11,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    ,
    images8a,
    images9,
    images10,
    images11,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    ,
    images8a,
    images9,
    images10,
    images11,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    ,
    images8a,
    images9,
    images10,
    images11,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    cat,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji6,
    emoji7,
    emoji8,
    images8a,
    images9,
    images10,
    images11
  ]

  return (
    <>
      <div>
        <div className=' bg-black text-white min-h-screen'>
          <div className='border-0 border-white navbar-main flex flex-col justify-center p-5'>
            {/* Navbar */}
            <nav
              className={`bg-black/10 shadow-md shadow-gray-500 my-3 w-[95%] text-white rounded-lg p-4 flex justify-between items-center transition-all duration-300 ${
                isSticky
                  ? 'fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg'
                  : ''
              }`}
            >
              <div className='flex items-center space-x-2'>
                <Image src='/logo.png' alt='AI Emojis' width={32} height={32} />
                <span className='text-lg font-bold'>AI Emojis</span>
              </div>

              {/* Desktop Menu */}
              <div className='hidden md:flex space-x-6'>
                <a href='#' className='hover:text-gray-300'>
                  WhatsApp Stickers
                </a>
                <a href='#' className='hover:text-gray-300'>
                  Slack Integration
                </a>
                <a href='#' className='hover:text-gray-300'>
                  Discord Bot
                </a>
              </div>

              <div className='flex items-center space-x-4'>
                <button className='hidden md:block bg-white text-black px-3 py-1 rounded'>
                  Download App
                </button>
                {/* Mobile Menu Button */}
                <button
                  className='md:hidden'
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu with Smooth Dropdown */}
            <div
              className={`md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 ${
                menuOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <a href='#' className='hover:text-gray-300'>
                WhatsApp Stickers
              </a>
              <a href='#' className='hover:text-gray-300'>
                Slack Integration
              </a>
              <a href='#' className='hover:text-gray-300'>
                Discord Bot
              </a>
              <button className='bg-white text-black px-3 py-1 rounded'>
                Download App
              </button>
            </div>

            {/* Search Bar */}
            <div className='p-1'>
              <div className='flex items-center bg-black border-white border-1 rounded-2xl w-[95%] p-3'>
                <Search className='text-gray-400' />
                <input
                  type='text'
                  placeholder='Search and download over 6,113,929 AI emojis'
                  className='bg-transparent text-white w-full outline-none px-2'
                />
              </div>
            </div>
          </div>







          {/* Hero Section */}
          <div className='text-center mt-10'>
            <h1 className='text-4xl md:text-6xl font-bold'>
              <span className='text-gray-600'>AI</span>
              <span className='text-orange-500'> Emojis</span>
              <span className='text-purple-500'> Generator</span>
            </h1>
            <h2 className='text-2xl md:text-4xl font-semibold mt-2'>
              made <span className='text-gray-500'>for</span> by you
            </h2>
          </div>

          <div className='flex flex-col items-center min-h-screen bg-black p-4 text-white'>
            {/* Emoji Showcase */}
            <div className='flex justify-center mt-8'>
              <Image
                src={cat}
                alt='Avatar Showcase'
                width={800}
                height={400}
                className='rounded-lg shadow-lg w-full md:w-auto'
              />
            </div>

            {/* Input Box */}
            <div className='flex justify-center mt-6 w-full h-[150px] rounded-[100px]'>
              <div className='bg-gray-800 p-4 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 relative'>
                <input
                  type='text'
                  placeholder='Describe your image'
                  className='bg-transparent text-white outline-none px-2 w-full text-lg'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <button className='absolute bottom-4 right-4 border-2 border-solid border-white h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 text-xl'>
                  ↑
                </button>
              </div>
            </div>

            <div className='flex flex-wrap justify-center gap-3 mt-4'>
              <button className='bg-gray-700 text-white px-4 py-2 rounded-lg'>
                Penguin Wizard
              </button>
              <button className='bg-gray-700 text-white px-4 py-2 rounded-lg'>
                Cat wearing sunglasses
              </button>
              <button className='bg-gray-700 text-white px-4 py-2 rounded-lg'>
                Cupcake with pink icing
              </button>
              <button className='bg-gray-700 text-white px-4 py-2 rounded-lg'>
                Shark with a top hat
              </button>
            </div>
          </div>

          {/* Discover Emojis Section */}
          <div className='bg-black min-h-screen text-white p-5'>
            <h2 className='text-3xl font-bold mb-6'>Discover Emojis</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center'>
              {emojis.map((emoji, index) => (
                <div
                  key={index}
                  className='flex justify-center items-center p-2'
                >
                  <Image
                    src={emoji}
                    alt={`emoji-${index}`}
                    width={100}
                    height={100}
                    className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className='bg-black border-t-2 border-solid border-white text-white py-10 px-6 md:px-20'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
          {/* Left Section */}
          <div className='flex flex-col items-center md:items-start space-y-4'>
            {/* <Image src={appLogo} alt='App Logo' width={50} height={50} /> */}
            <div className='flex space-x-3'>
              <Image src={hamza_footer} alt='Footer' width={240} height={80} />
            </div>
            <div className='flex space-x-4 text-2xl mt-4'>
              <FaTiktok />
              <FaInstagram />
              <FaAt />
              <PiButterflyThin />
              <RxCross2 />
              <FaGithub />
            </div>
          </div>

          {/* Middle Section */}
          <div className='flex flex-col md:flex-row gap-10 text-center md:text-left mt-6 md:mt-0'>
            <div>
              <h3 className='font-bold'>Features</h3>
              <ul className='space-y-2 mt-2'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    WhatsApp Stickers
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Slack Integration
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Discord Bot
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold'>Company</h3>
              <ul className='space-y-2 mt-2'>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400 hover:text-white'>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>© 2025 851 Inc.</p>
          <p className='flex items-center'>
            Crafted with care in San Francisco
            <span className='ml-2'>
              {/* <Image src={appLogo} alt='Location Icon' width={20} height={20} /> */}
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}
