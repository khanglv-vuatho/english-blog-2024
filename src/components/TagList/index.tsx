'use client'

import { memo, useEffect, useRef, useState } from 'react'
import Tag from '@/components/Tag'
import { ITagProps } from '@/interface'

const TagList = ({ tags }: { tags: ITagProps[] }) => {
  const containerRef = useRef<any>(null)
  const [hiddenCount, setHiddenCount] = useState(0)

  useEffect(() => {
    if (containerRef?.current) {
      const containerWidth = containerRef?.current?.offsetWidth
      let totalWidth = 0
      let count = 0

      Array.from(containerRef.current.children).forEach((child: any, index) => {
        totalWidth += child.offsetWidth
        if (totalWidth > containerWidth) {
          count = tags.length - index
        }
      })

      setHiddenCount(count)
    }
  }, [tags])

  return (
    <div className='flex flex-wrap items-center gap-2' ref={containerRef}>
      {tags.slice(0, tags.length - hiddenCount).map((tag, index) => (
        <Tag key={index} name={tag.name} isHidden={index >= tags.length - hiddenCount} url={tag.url} />
      ))}
    </div>
  )
}

export default memo(TagList)
