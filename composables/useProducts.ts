import { useAppStore } from '@/store/appStore'
export const useProducts = async (slug?: string) => {
  const { getProducts } = useAppStore()
  const products = getProducts(slug)
  if (!products) throw createError({ message: `Ни в одном пункте меню нет каталога продуктов` })
  const categoryTitle = products[0].category.title
  return { products, categoryTitle }
}
