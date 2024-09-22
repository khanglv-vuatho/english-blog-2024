import ListArticles from '@/components/ListArticles'
import { IArticle, IMeta } from '@/interface'
import fetcherInstance from '@/services'

const ArtilesTag = async ({ params, searchParams }: { params: { tag: string }; searchParams: { page: string } }) => {
  let posts: { data: IArticle[]; meta: IMeta } = { data: [], meta: { currentPage: 0, totalPages: 0, totalCount: 0, limit: 0 } }
  const limit = 6
  try {
    posts = await fetcherInstance.get(`/v1/posts/supports/get-all-by-slug-tag?slug=${params.tag}&page=${searchParams?.page || 1}&limit=${limit}`)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }

  console.log({ posts })

  return (
    <div className='flex flex-col justify-center gap-8 p-4 px-8 md:px-20 md:pt-10'>
      <ListArticles posts={posts?.data} meta={posts?.meta} />
    </div>
  )
}

export default ArtilesTag
