'use client'

import Link from 'next/link'
import React, { memo, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const WrapperLink = ({ href, className, title }: { href: string; className?: string; title?: string }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return <Link href={href} className={twMerge('absolute inset-0 z-50 cursor-pointer', className)} />
}

export default memo(WrapperLink)
