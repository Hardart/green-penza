import { products } from '../../localData'

export default defineEventHandler(async event => {
  const { productSlug, productCategory } = getQuery(event)

  const categorySlug = productCategory as string

  const product = products.filter((product: Product) => product.category.slug === categorySlug).find(product => product.slug === productSlug)

  if (!product)
    throw createError({
      statusCode: 404,
      message: 'Product is not found',
    })

  return product
})
