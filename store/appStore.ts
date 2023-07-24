import api from '@/api/products'
export const useAppStore = defineStore('appStore', () => {
  // STATE
  const catalog = ref<PageMetaData>()
  const initialized = ref(false)
  const productsList: Ref<Maybe<ProductWithLink[]>> = ref(null)

  // GETTERS

  const getProducts: (slug?: string) => Maybe<ProductWithLink[]> = (categorySlug?: string) => {
    if (categorySlug) return productsList.value?.filter(product => product.category.slug == categorySlug)
    return productsList.value
  }

  // ACTIONS
  async function init() {
    if (initialized.value) return
    initialized.value = true
    fetchProducts()
    const { catalog: products, pages: siteMap } = await useMetadata()
    catalog.value = products
  }

  async function fetchProducts() {
    const data = await api.getAll()

    const products: Maybe<ProductWithLink[]> = data.value?.map(elem => {
      const link = `/products/${elem.category.slug}/${elem.slug}`
      return { ...elem, link }
    })
    productsList.value = products
  }

  // function pagesMeta(array: PageMetaData[] | undefined | string) {
  //   if (array == undefined) return
  //   if (typeof array === 'string') return

  //   array.forEach((obj: PageMetaData, index: number) => {
  //     const values = Object.keys(obj) as Array<keyof PageMetaData>
  //     const { title, link } = obj

  //     pages.value.push({ title, link })
  //     values.forEach(key => {
  //       if (Array.isArray(obj[key])) pagesMeta(obj[key])
  //     })
  //   })
  //   return pages
  // }

  return { catalog, init, productsList, fetchProducts, getProducts }
})
