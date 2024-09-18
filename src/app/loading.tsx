import ArticleSkeleton from '@/components/ArticleSkeleton'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center gap-8 p-4 px-20 md:pt-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 2xl:grid-cols-6'>
        {Array.from({ length: 6 }).map((_, index) => (
          <ArticleSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default Loading
