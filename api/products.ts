export default {
  async getAll() {
    const { data, error } = await useFetch<Product[]>('/api/products')
    if (error.value) {
      throw createError({ ...error.value, message: `Не могу получить список продуктов!` })
    }
    return data
  },
}
