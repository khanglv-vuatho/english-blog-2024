import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import ImageFallback from '../ImageFallback'
import { IArticle, ITagProps } from '@/interface'
import { formatTime } from '@/utils'
import TagList from '../TagList'

const Article = ({ item }: { item: IArticle }) => {
  const tags: ITagProps[] = [
    { name: 'NodeJs', url: '/tag/nodejs' },
    { name: 'Javascript', url: '/tag/javascript' },
    { name: 'NextJs', url: '/tag/nextjs' },
    { name: 'Typescript', url: '/tag/typescript' }
  ]
  return (
    <Link href={'/article1/' + item.slug} className='block w-full'>
      <article suppressHydrationWarning className='flex flex-col gap-2 rounded-2xl border-1 border-[#383d48] bg-[rgb(29,31,38)] p-2 transition hover:border-[#4b4f5c]'>
        <div className='flex flex-col gap-2 px-2 pt-2'>
          <Avatar className='size-8' />
          <h3 className='line-clamp-3 break-words text-lg font-bold text-white'>{item.description}</h3>
          <TagList tags={tags} />
          <div className='flex items-center gap-1 text-sm text-[#a8b3cf]'>
            <time title={formatTime(item.createAt)} dateTime={formatTime(item.createAt)}>
              {formatTime(item.createAt)}
            </time>
            <span>•</span>
            <p>5m to read</p>
          </div>
        </div>
        <div className='h-[176px] w-full overflow-hidden rounded-2xl'>
          <ImageFallback src={item.thumbnail} alt={item.thumbnail} className='size-full object-cover' />
        </div>
      </article>
    </Link>
  )
}

export default Article
