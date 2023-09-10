export default interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    category: Category;
    description: string;
    image: string;
    rating: Rating;
}

type Rating = {
    rate: number;
    count: number;
}

enum Category {
    MEN="men's clothing",
    WOMEN="women's clothing",
    JEWELERY="jewelery",
    ELECTRONICS="electronics",
}
