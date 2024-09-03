import Article from '@/components/Article'
import ListArticles from '@/components/ListArticles'
import { Button } from '@nextui-org/react'
import { Setting4 } from 'iconsax-react'

export default async function Home() {
  return (
    // <div className='grid md:grid-cols-6'>
    //   <div className='hidden min-h-[calc(100dvh-73px)] border-r border-primary-gray md:block'>123</div>
    //   <div className='col-span-5 flex flex-col gap-8 p-4 md:px-20 md:pt-10'>
    //     <Button startContent={<Setting4 size={20} />} className='hidden w-fit bg-[#1b1f26] font-bold text-primary-light-blue hover:text-white md:flex'>
    //       Feed settings
    //     </Button>
    //     <ListArticles />
    //   </div>
    // </div>
    <div className='flex flex-col justify-center gap-8 p-4 md:px-20 md:pt-10'>
      <Button startContent={<Setting4 size={20} />} className='hidden w-fit bg-[#1b1f26] font-bold text-primary-light-blue hover:text-white md:flex'>
        Feed settings
      </Button>
      <ListArticles />
    </div>
  )
}
