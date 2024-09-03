'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ImageFallback from '../ImageFallback'
import { TPost } from '@/type'
import { TYPESFROM } from '@/constants'
import instance from '@/services/axiosConfig'

const PopularPosts = () => {
  const [postPopular, setPostPopular] = useState<TPost[]>([])
  const [onFetching, setOnFetching] = useState(false)

  const handleGetPopularPosts = async () => {
    try {
      const data: any = await instance.get('/v1/posts/get-popular')
      //   const tranformedData = data?.map((item: any) => ({
      //     ...data,
      //     thumb: item?.thumbnail
      //   }))
      setPostPopular(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetching && handleGetPopularPosts()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <div className='flex flex-col gap-20'>
      {postPopular?.map((item) => (
        <Link href={item.url} key={item.title} className='relative max-w-[392px] lg:max-w-none'>
          <div className='size-full'>
            <ImageFallback src={item.thumbnail} alt={item.thumbnail} className='max-h-[220px] w-full min-w-[340px]' />
          </div>
          <div className='absolute bottom-0 z-20 translate-y-1/2 px-4'>
            <div className='bg-white px-3 py-4 font-bold'>
              <p className='line-clamp-2'>{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PopularPosts
