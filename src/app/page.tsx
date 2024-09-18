import ListArticles from '@/components/ListArticles'
import { IArticle } from '@/interface'
import fetcherInstance from '@/services'

async function fetchPosts(page: number, limit: number): Promise<{ meta: any; data: IArticle[]; loading: boolean }> {
  try {
    let loading = true
    const posts = await fetcherInstance.get(`/v1/posts?page=${page}&limit=${limit}`)
    loading = false
    return { meta: posts.meta, data: posts.data, loading }
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return { meta: {}, data: [], loading: false }
  }
}

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  // This line initializes the 'initialPage' variable
  // It uses the 'searchParams.page' value if it exists, or defaults to '1'
  // The value is then parsed as an integer with base 10
  // This ensures we have a valid number for pagination
  const initialPage = parseInt(searchParams?.page ?? 1)
  const limit = 6
  const { meta, data, loading } = await fetchPosts(initialPage, limit)

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col justify-center gap-8 p-4 px-20 md:pt-10'>
        {/* <Button startContent={<Setting4 size={20} />} className='hidden w-fit bg-[#1b1f26] font-bold text-primary-light-blue hover:text-white md:flex'>
        Feed settings
      </Button> */}
        {data.length === 0 ? <div>No posts found</div> : <ListArticles loading={loading} meta={meta} posts={data} />}
      </div>
    </div>
  )
}
