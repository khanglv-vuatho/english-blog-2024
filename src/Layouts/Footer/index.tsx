'use client'
import { Edit, Home, Notification, Setting4 } from 'iconsax-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  const [active, setActive] = useState('Home')

  const listMenuFooter = [
    {
      title: 'Home',
      icon: <Home />
    },
    {
      title: 'Settings',
      icon: <Setting4 />
    },
    {
      title: 'Hihi',
      icon: <Home />
    },
    {
      title: 'Notifications',
      icon: <Notification />
    },
    {
      title: 'React',
      icon: <Edit />
    }
  ]

  return (
    <div className='sticky bottom-0 left-0 right-0 z-50 p-2 md:hidden'>
      <div className='grid grid-cols-5 items-center justify-center gap-4 rounded-2xl border-t border-[#a8b3cf]/80 bg-[#0f1418] p-4 shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[2.5rem]'>
        {listMenuFooter.map((item, index) => (
          <motion.div onClick={() => setActive(item.title)} layout key={index} className='relative flex w-full flex-col items-center justify-center gap-1'>
            {item.title === active && (
              <motion.div layoutId='active' className='absolute -top-[18px] left-0 right-0 flex h-0.5 w-full items-center justify-center'>
                <div className='h-full w-1/3 rounded-full bg-white' />
              </motion.div>
            )}
            <span>{item.icon}</span>
            <p className='text-xs'>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Footer
