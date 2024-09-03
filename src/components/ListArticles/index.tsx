import Article from '@/components/Article'
import { IArticle } from '@/interface'
import fetcherInstance from '@/services'

const ListArticles = async () => {
  let posts: IArticle[] = []
  try {
    posts = await fetcherInstance.get('/v1/posts')
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 2xl:grid-cols-6'>
      {posts.map((item, index) => (
        <Article key={index} item={item} />
      ))}
    </div>
  )
}

export default ListArticles
