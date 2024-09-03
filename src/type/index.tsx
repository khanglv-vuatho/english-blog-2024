export type TPost = { thumbnail: string } & TLink
export type TLink = { title: string; url: string }
export type TAccordionLink = { title: string; url: string; children?: TLink[] }
export type TArticle = {
  description: string
  tag: string
  time: string
  urlTag: string
} & TPost

export type TBreadcrumbWithUrl = {
  title: string
  url?: string
}

export type SocialNetwork = {
  id: string
  link: string
  icon: any | React.ReactNode
  background: string
  color: string
}
