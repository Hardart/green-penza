export {}

declare global {
  type Maybe<T> = T | null | undefined

  interface AccordeonItem {
    id: number
    title: string
    body?: string
    htmlBody?: string
  }

  interface ItemBase {
    id: number
    title: string
    slug: string
  }

  interface Product extends ItemBase {
    subtitle?: string
    type?: 'ЗКС' | 'ОКС'
    text?: string
    features?: ProductData
    price?: number
    height?: {
      min?: number
      max: number
    }
    img?: string
    category: ItemBase
  }

  interface ProductWithLink extends Product {
    link: string
  }

  type Category = ItemBase & {
    img?: string
    products: Product[]
  }

  type Page = ItemBase & {
    categories?: Category[]
  }

  interface MetaBase {
    title: string
    slug: string
    link: string
  }

  interface ProductMeta extends MetaBase {}

  interface CategoryMetaData extends MetaBase {
    products: ProductMeta[]
  }

  interface PageMetaData extends MetaBase {
    categories?: CategoryMetaData[]
  }

  type Breadcrumbs = {
    title: string
    link: string
  }
}
