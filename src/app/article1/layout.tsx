import fetcherInstance from '@/services'

export async function generateMetadata({ params }: { params: { tag: string; locale: string } }) {
  try {
    // const { data } = await fetcherInstance.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/byCategory?slug=${params.tag}`)
    const description: any = {
      vi: 'Ứng dụng số 1 Việt Nam',
      en: 'Leading App in Vietnam'
    }
    return {
      title: '123',
      description: description[params.locale || 'vi']
    }
  } catch (error) {
    console.log(error)
    const metadata: any = {
      vi: 'Không tìm thấy thẻ tag',
      en: 'Tag not found'
    }
    return {
      title: metadata[params.locale || 'vi'] || metadata.en
    }
  }
}

export default function LayoutArticle({ children }: { children: React.ReactNode }) {
  return children
}
