export const useProduct = async (productCategory: string | string[], productSlug: string | string[]) => {
  const url = '/api/product'

  const data = await useFetchWithCache<Product>(url, { productCategory, productSlug })
  return data
}
