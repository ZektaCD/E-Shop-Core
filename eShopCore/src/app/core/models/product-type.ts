export interface Product {
    id_db: number,
    sku?: string,
    name: string,
    cost?: number, 
    description?: string,
    price: number,
    off_percent?: number,
    category?: Category,
    stock: number,
    stock_min?: number,
    active: true,
    suppliers?: Suppliers[],
    stock_state: boolean,
    created_date: string,
    edited_date: string,
}

export interface Suppliers {
    id_db: number,
    name: string,
    cuit: string,
    email?: string,
    telephone: string,
    adress: string,
    adress_number: string,
    adress_unit: string,
    city?: string,
    commits?: string,
    categories_associated?: Category[]
    active: true
}

export interface Category {
    id_db: number,
    name: string,
    off_percent?: number,
    subcategories?: Subcategory[]
}

export interface Subcategory extends Omit<Category,'subcategories'> {}
