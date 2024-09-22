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
  tags: ITagProps[]
  author: string
  authorAvatar: string
}

export interface ITagProps {
  title: string
  slug: string
}

export interface IMeta {
  currentPage: number
  totalPages: number
  totalCount: number
  limit: number
}
