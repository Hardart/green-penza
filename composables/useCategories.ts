export default async <T>(categorySlug?: string) => {
  const url = '/api/category'
  const query = categorySlug ? { categorySlug } : {}
  const { data, error } = await useFetch<T>(url, { query })

  if (error.value) {
    if (categorySlug) throw createError({ ...error.value, message: `Не могу получить данные категории - ${categorySlug}` })
    throw createError({ ...error.value, message: `Не могу нполучить список категорий!` })
  }

  if (data == null || data.value == null) throw createError({ message: `Не могу нполучить список категорий!` })

  return data.value
}
