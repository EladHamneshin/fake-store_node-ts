import * as productsData from '../data/productsData.js';
import Product  from '../models/product.js';

export async function getProducts() {
    return await productsData.getProducts();
}

export async function getProductById(id: number) {
    return await productsData.getProductById(id);
}

export async function addProduct(product: Product) {
    return await productsData.addProduct(product);
}

export async function updateProduct(productId: number, product: Product) {
    return await productsData.updateProduct(productId, product);
}

export async function deleteProduct(productId: number) {
    return await productsData.deleteProduct(productId);
}

export async function increseProductQuantity(productId: number) {
    return await productsData.increseProductQuantity(productId);
}

export async function decreseProductQuantity(productId: number) {
    return await productsData.decreseProductQuantity(productId);
}

export async function addProducts(products: Product[]) {
    return await productsData.addProducts(products);
}



