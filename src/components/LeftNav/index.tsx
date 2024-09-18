'use client'
import { DocumentSketch, Facebook, Home } from 'iconsax-react'
import Link from 'next/link'
import React, { useState } from 'react'

const LeftNav = () => {
  const [active, setActive] = useState(0)
  const navbar = [
    {
      icon: <Home />,
      title: 'My Feed',
      url: '/'
    }
    // {
    //   icon: <DocumentSketch />,
    //   title: 'Docs',
    //   url: '/docs'
    // }
  ]

  const navSocial = [
    {
      icon: <Facebook />,
      title: 'Facebook',
      url: 'https://www.facebook.com/tridang279'
    }
  ]
  return (
    <div className='sticky left-0 top-[57px] flex h-[calc(100dvh-57px)] flex-col justify-between border-r border-primary-gray py-4'>
      <div className='flex flex-col'>
        {navbar.map((item, index) => (
          <Link href={item.url} key={index} className={`flex items-center gap-2 px-2 py-1 transition ${active === index ? 'bg-[#a8b3cf33]' : 'bg-transparent hover:bg-[#a8b3cf33] hover:text-white'}`}>
            <div>{React.cloneElement(item.icon, { variant: active === index ? 'Bold' : 'Linear' })}</div>
            <div className={`text-sm ${active === index ? 'text-white' : 'text-primary-light-gray'}`}>{item.title}</div>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-4'>
        {navSocial.map((item, index) => (
          <Link target='_blank' href={item.url} key={index} className={'flex items-center gap-2 bg-transparent px-2 py-1 transition hover:bg-[#a8b3cf33] hover:text-white'}>
            <div>{item.icon}</div>
            <div className={`text-sm ${active === index ? 'text-white' : 'text-primary-light-gray'}`}>{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LeftNav
