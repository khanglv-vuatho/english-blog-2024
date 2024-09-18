'use client'

import { IArticle, IMeta } from '@/interface'
import Article from '../Article'
import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const ListArticles = ({ meta, posts, loading }: { meta?: IMeta; posts: IArticle[]; loading: boolean }) => {
  const router = useRouter()
  const handleChangePage = (page: number) => {
    const currentUrl = new URL(window.location.href)
    const pathname = currentUrl.pathname

    if (pathname === '/') {
      router.push(`/?page=${page}`)
    } else {
      const newUrl = new URL(currentUrl)
      newUrl.searchParams.set('page', page.toString())
      router.push(newUrl.toString())
    }
  }
  return (
    <div className='flex flex-col gap-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 2xl:grid-cols-6'>
        {loading ? (
          <div className='flex items-center justify-center'>loading...</div>
        ) : posts.length === 0 ? (
          <div>No posts found</div>
        ) : (
          posts?.map((item, index) => {
            return <Article key={index} item={item} />
          })
        )}
      </div>
      <div className='flex w-full items-center justify-center'>
        {meta && <Pagination onChange={handleChangePage} showControls total={Number(meta.totalPages)} initialPage={Number(meta.currentPage) || 1} />}
      </div>
    </div>
  )
}

export default ListArticles
