import Tag from '@/components/Tag'
import { ITagProps } from '@/interface'
import { memo } from 'react'

const TagList = ({ tags }: { tags: ITagProps[] }) => {
  return <div className='flex flex-wrap items-center gap-2'>{tags?.map((tag, index) => <Tag key={index} name={tag.title} url={tag.slug} />)}</div>
}

export default memo(TagList)
