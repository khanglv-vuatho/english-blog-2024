import { memo } from 'react'

import InputSearch from '@/modules/InputSearch'
import RightNav from '@/modules/RightNav'
import Logo from '@/components/Logo'

function Header() {
  return (
    <header className='sticky left-0 right-0 top-0 z-50 grid w-full grid-cols-2 items-center gap-20 border-b border-primary-gray bg-black px-4 py-2 md:grid-cols-3'>
      <Logo />
      <InputSearch />
      <RightNav />
    </header>
  )
}

export default memo(Header)
