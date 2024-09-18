import ImageCustom from '@/components/ImageCustom'
import ImageFallback from '@/components/ImageFallback'
import { IArticle } from '@/interface'
import fetcherInstance from '@/services'
import { formatTime } from '@/utils'
import { ArrowRight, ArrowRight2, Eye } from 'iconsax-react'
import Link from 'next/link'

const ArtilesDetailPage = async ({ params }: { params: { ariticleId: string; tag: string } }) => {
  console.log({ params })

  let detailData
  try {
    detailData = await fetcherInstance.get(`/v1/posts/${params?.ariticleId}`)
  } catch (error) {
    console.error('Failed to fetch post details:', error)
  }
  console.log({ detailData })

  let popularArticles: IArticle[] = []
  try {
    popularArticles = await fetcherInstance.get('/v1/posts/get-popular')
  } catch (error) {
    console.error('Failed to fetch popular articles:', error)
  }

  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-3 flex flex-col gap-4 rounded-xl p-8 pt-10'>
        <h1 className='text-xl font-semibold md:text-3xl 2xl:text-4xl'>{detailData?.title}</h1>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1 text-white/70'>
            <span>
              <Eye variant='Bold' />
            </span>
            <p className='text-xs font-medium'>{detailData?.views} Views</p>
          </div>
          <time className='text-xs font-medium text-white/70' title={formatTime(detailData?.createAt)} dateTime={formatTime(detailData?.createAt)}>
            {formatTime(detailData?.createAt)}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: detailData?.detail || '' }} />
      </div>
      <div className='col-span-1 border-l border-white/10 p-4'>
        <div className='flex flex-col rounded-2xl border border-[#383d48]'>
          <h3 className='my-0.5 px-4 py-3 text-[#a8b3cf]'>Popular articles</h3>
          <div className='h-px bg-[#383d48]' />
          <div className='flex flex-col gap-2'>
            {/* just show 3 item */}
            {popularArticles?.slice(0, 3).map((item, index) => (
              <Link href={`/${item?.tags?.[0]?.slug}/${item?.slug}`} key={index} className='flex cursor-pointer items-start gap-2 px-4 py-2 transition hover:bg-[#161a1f]'>
                <ImageFallback src={item?.thumbnail} className='flex size-7 flex-shrink-0 rounded-full' alt={item?.title} />
                <p className='line-clamp-3 text-sm'>{item?.title}</p>
              </Link>
            ))}
          </div>
          <div className='h-px bg-[#383d48]' />
          <div className='my-0.5 flex items-center px-4 py-3 text-[#a8b3cf]'>
            <h3 className=''>View all </h3>
            <span>
              <ArrowRight2 />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtilesDetailPage
