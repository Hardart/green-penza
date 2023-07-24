export const useMetadata = async () => {
  const url = '/api/metadata'

  const data = await useFetchWithCache<PageMetaData[]>(url)
  const catalog: PageMetaData | undefined = data.value.find(page => page.categories)
  if (!catalog) throw createError({ message: `Ни в одном пункте меню нет каталога продуктов` })

  return { pages: data.value, catalog }
}
