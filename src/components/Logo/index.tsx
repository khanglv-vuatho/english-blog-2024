'use client'

import { memo } from 'react'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <p className='cursor-pointer text-lg font-semibold' onClick={() => router.push('/')}>
      Tris Ielts
    </p>
  )
}

export default memo(Logo)
