import ListArticles from '@/components/ListArticles'
import fetcherInstance from '@/services'
import { createSlug } from '@/utils'

const SearchPage = async ({ searchParams }: { searchParams: { keyword: string } }) => {
  let searchResult = []
  try {
    searchResult = await fetcherInstance.get(`/v1/posts/supports/search?keyword=${createSlug(searchParams?.keyword).replace(/-/g, ' ')}`)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }
  console.log({ search: createSlug(searchParams?.keyword).replace(/-/g, ' ') })
  return (
    <div className='flex flex-col justify-center gap-8 p-4 px-20 md:pt-10'>
      <ListArticles posts={searchResult?.posts} />
    </div>
  )
}

export default SearchPage
