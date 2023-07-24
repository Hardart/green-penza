import { products } from '../../localData'
export default defineEventHandler(async event => {
  const { slug } = getQuery(event)

  const flatProducts = products
    .filter((product: Product) => {
      if (slug) return product.category.slug == (slug as string)
      return product
    })
    .map(item => {
      const { title, slug, img, category } = item
      return { title, slug, img, category }
    })

  if (!flatProducts) {
    throw createError({
      statusCode: 404,
      message: 'Products is not found',
    })
  }

  return flatProducts
})
