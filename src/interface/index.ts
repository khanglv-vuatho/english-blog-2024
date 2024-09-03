export interface IArticle {
  _id: string
  title: string
  description: string
  categoryId: string
  tagId: string
  detail: string
  slug: string
  views: number
  thumbnail: string
  createAt: string
  updateAt: string | null
  _destroy: boolean
  popular: boolean
}

export interface ITagProps {
  name: string
  url: string
}
