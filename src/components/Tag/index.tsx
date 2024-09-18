import { memo } from 'react'
import Link from 'next/link'
interface ITagProps {
  name: string
  url: string
}

const Tag: React.FC<ITagProps> = ({ name, url }) => {
  return (
    <Link href={url} title={name} className='z-[100] w-fit whitespace-nowrap rounded-[4px] border-1 border-[#383d48] px-1 py-0.5 text-xs text-[#767d92] md:rounded-lg md:px-2 md:py-1 md:text-sm'>
      #{name}
    </Link>
  )
}
export default memo(Tag)
