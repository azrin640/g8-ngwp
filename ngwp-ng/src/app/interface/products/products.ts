export interface Products {

    id: number,
    name: string,
    description: string,
    short_description: string,
    sku: string,
    price: string,
    regular_price: string,
    sale_price: string,
    price_html: string,
    categories: [
        {
            id: number,
            name: string
        }
    ],
    images: [
        { 
            id: number,
            src: string,
            alt: string
        }
    ]
    
}
