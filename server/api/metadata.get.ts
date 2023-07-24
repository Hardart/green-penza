import { pages } from '../../localData'

type ProductElement = Page | Category | Product

const setSubmenuLevel = (element: ProductElement): number => {
  let levelValue
  switch (true) {
    case 'products' in element:
      levelValue = 1
      break
    case 'category' in element:
      levelValue = 2
      break
    default:
      levelValue = 0
  }
  return levelValue
}

export default defineEventHandler(async event => {
  const meta = pages.map(pageMap)
  if (!meta)
    throw createError({
      statusCode: 404,
      message: 'Product is not found',
    })
  return meta
})

let pathArray: string[] = []

function categoryMap(category: Category): CategoryMetaData {
  const metaBase = setuplEement(category)
  const products = category.products.map(setuplEement)
  return { ...metaBase, products }
}

function pageMap(page: Page): PageMetaData {
  const metaBase = setuplEement(page)
  if (!page.categories) return metaBase
  const categories = page.categories.map(categoryMap)
  return { ...metaBase, categories }
}

function setuplEement(element: ProductElement): MetaBase {
  const { title, slug } = element
  const sliceLevel = setSubmenuLevel(element)
  pathArray = pathArray.slice(0, sliceLevel)
  pathArray.push(slug)
  const link = `/${pathArray.join('/')}`
  return { title, slug, link }
}
