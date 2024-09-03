'use client'

import { Input, Kbd } from '@nextui-org/react'
import { SearchNormal1 } from 'iconsax-react'
import { ChangeEvent, memo, useEffect, useRef, useState } from 'react'

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Command (Meta) + K is pressed
      if (event.metaKey && event.key === 'k') {
        event.preventDefault() // Prevent the default action
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }
    }

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='hidden md:block'>
      <Input
        ref={inputRef}
        value={searchValue}
        size='lg'
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        classNames={{
          base: '1',
          clearButton: '2',
          description: '3',
          errorMessage: '4',
          input: 'placeholder:text-opacity-50',
          label: '6',
          helperWrapper: '7',
          inputWrapper: '8 bg-[#1d1f26] data-[hover=true]:bg-[#1d1f26] group-data-[focus=true]:bg-[#1d1f26] caret-[#5c9bfa] border-transparent group-data-[focus=true]:border-primary-gray border-1',
          innerWrapper: '9',
          mainWrapper: '10'
        }}
        placeholder='Search'
        startContent={<SearchNormal1 size={32} />}
        endContent={
          <div style={{ opacity: isFocus ? 0 : 1 }} className=' flex items-center gap-1'>
            <Kbd
              keys={['command']}
              classNames={{
                base: 'px-2'
              }}
            />
            <span>+</span>
            <Kbd
              classNames={{
                base: 'px-2'
              }}
            >
              K
            </Kbd>
          </div>
        }
      />
    </div>
  )
}

export default memo(InputSearch)
