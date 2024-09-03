import { memo } from 'react'
import Link from 'next/link'

interface ITagProps {
  name: string
  isHidden?: boolean
  url: string
}

const Tag: React.FC<ITagProps> = ({ name, isHidden = false, url }) => {
  const content = (
    <>
      {!isHidden && `#`}
      {name}
    </>
  )

  return (
    <Link href={url} className='w-fit whitespace-nowrap rounded-lg border-1 border-[#383d48] px-2 py-1 text-xs text-[#767d92]'>
      {content}
    </Link>
  )
}

export default memo(Tag)
