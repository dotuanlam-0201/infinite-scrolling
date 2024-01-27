export type TypePost = {
    id?: number
    title?: string
    description?: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]
}

export class Posts {
    products: TypePost[]
    total: number
    skip: number
    limit: number
    constructor() {
        this.limit = 0
        this.skip = 0
        this.products = []
        this.total = 0
    }
}
export class Post implements TypePost {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    constructor() {
        this.id = 0
        this.title = ''
        this.description = ''
        this.price = 0
        this.discountPercentage = 0
        this.rating = 0
        this.stock = 0
        this.brand = ''
        this.category = ''
        this.thumbnail = ''
        this.images = []
    }
}