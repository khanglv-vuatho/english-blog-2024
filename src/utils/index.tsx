import moment from 'moment'

const normalizeKeyword = (keyword: string) => {
  if (!keyword) return ''
  return (keyword as string)
    .normalize('NFD')
    .toLowerCase()
    .replace(/[\u0300-\u036f\s]/g, '')
    .replace('đ', 'd')
}
const trasnformDataArticles = (data: any) => {
  const newData = data.map((item: any) => {
    return {
      thumb: item?.thumbnail,
      title: item?.title,
      category: item?.category?.[0]?.title,
      url: `/${item?.category?.[0]?.slug}/${item?.tags?.[0]?.slug}/${item?.slug}`,
      description: item?.description,
      tag: item?.tags?.[0]?.title,
      time: moment(item?.createAt)?.format('DD/MM/YYYY'),
      urlTag: `/${item?.category?.[0]?.slug}/${item?.tags?.[0]?.slug}`
    }
  })
  return newData
}

const SplitString = (words: string) => {
  return words.split('')
}

const formatTime = (time: string) => {
  return moment(time).utc().format('MMM DD')
}

const createSlug = (value: string): string => {
  if (!value) return ''
  return (
    value
      .toLowerCase() // Convert to lowercase
      // Trim leading and trailing whitespace
      .normalize('NFD') // Normalize the string
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
      .replace(/đ/g, 'd') // Replace 'đ' with 'd'
      .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
      .replace(/^-+|-+$/g, '')
  ) // Remove leading or trailing hyphens
}

export { SplitString, trasnformDataArticles, normalizeKeyword, formatTime, createSlug }
