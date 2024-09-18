import ListArticles from '@/components/ListArticles'
import { IArticle } from '@/interface'
import fetcherInstance from '@/services'

const ArtilesTag = async ({ params }: { params: { tag: string } }) => {
  let posts: IArticle[] = []
  try {
    posts = await fetcherInstance.get(`/v1/posts/supports/get-all-by-slug-tag?slug=${params.tag}`)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }
  return (
    <div className='flex flex-col justify-center gap-8 p-4 px-20 md:pt-10'>
      <ListArticles posts={posts} />
    </div>
  )
}

export default ArtilesTag
