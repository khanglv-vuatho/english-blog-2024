import { IArticle, ITagProps } from '@/interface'
import { formatTime } from '@/utils'
import TagList from '@/components/TagList'
import WrapperLink from '@/components/WrapperLink'
import ImageCustom from '@/components/ImageCustom'
import ImageFallback from '../ImageFallback'

const Article = ({ item }: { item: IArticle }) => {
  return (
    <article className='relative flex flex-col gap-2 rounded-2xl border-1 border-[#383d48] bg-[rgb(29,31,38)] p-2 transition hover:border-[#4b4f5c]'>
      <div className='flex flex-col gap-1 p-2'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div className='flex w-full items-center gap-2'>
              <ImageFallback src={item?.thumbnail} className='size-8 rounded-full 2xl:size-10' alt={item?.title} />
            </div>
            <div className='flex w-full items-center justify-end gap-1 text-[#a8b3cf] *:text-xs'>
              <time title={formatTime(item?.createAt)} dateTime={formatTime(item?.createAt)}>
                {formatTime(item?.createAt)}
              </time>
              <div>•</div>
              <p>5m to read</p>
            </div>
          </div>
          <h3 className='line-clamp-3 max-h-[84px] min-h-[84px] break-words text-lg font-medium text-white 2xl:text-xl'>{item?.description}</h3>

          <TagList tags={item?.tags} />
        </div>
      </div>
      <div className='size-full max-h-[176px] overflow-hidden rounded-lg'>
        <ImageCustom src={item?.thumbnail} alt={item?.title} className='size-full rounded-none object-cover' />
      </div>
      <WrapperLink title={item?.title} href={`/${item?.tags?.[0]?.slug}/${item?.slug}`} />
    </article>
  )
}

export default Article
