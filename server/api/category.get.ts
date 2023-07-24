import { categories } from '../../localData'
export default defineEventHandler(async event => {
  const { categorySlug } = getQuery(event)

  const flatCategory = categories
    .filter((category: Category) => {
      if (categorySlug) return category.slug == (categorySlug as string)
      return category
    })
    .map(item => {
      const { title, slug, img } = item
      return { title, slug, img }
    })

  if (!flatCategory) {
    throw createError({
      statusCode: 404,
      message: 'Category is not found',
    })
  }

  return flatCategory
})
