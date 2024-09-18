const ArticleSkeleton = () => {
  return (
    <article className='relative flex flex-col gap-2 rounded-2xl border-1 border-[#383d48] bg-[rgb(29,31,38)] p-2'>
      <div className='flex flex-col gap-1 p-2'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div className='flex w-full items-center gap-2'>
              <div className='size-8 animate-pulse rounded-full bg-primary-gray 2xl:size-10' />
            </div>
            <div className='flex w-full items-center justify-end gap-1'>
              <div className='h-4 w-20 animate-pulse rounded bg-primary-gray' />
              <div className='h-4 w-4 animate-pulse rounded-full bg-primary-gray' />
              <div className='h-4 w-16 animate-pulse rounded bg-primary-gray' />
            </div>
          </div>
          <div className='h-[84px] animate-pulse rounded bg-primary-gray' />
          <div className='flex gap-2'>
            {[1, 2, 3].map((i) => (
              <div key={i} className='h-6 w-16 animate-pulse rounded bg-primary-gray' />
            ))}
          </div>
        </div>
      </div>
      <div className='h-[176px] animate-pulse rounded-lg bg-primary-gray' />
    </article>
  )
}

export default ArticleSkeleton
