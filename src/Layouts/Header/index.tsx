import { memo } from 'react'

import InputSearch from '@/modules/InputSearch'
import RightNav from '@/modules/RightNav'

function Header() {
  return (
    <header className='grid grid-cols-2 items-center gap-20 border-b border-primary-gray p-4 md:grid-cols-3 md:px-4 md:py-2'>
      {/* <p>Tris Ielts</p> */}
      <p>DailyDev</p>
      <InputSearch />
      <RightNav />
    </header>
  )
}

export default memo(Header)
