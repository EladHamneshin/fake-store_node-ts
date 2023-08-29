import * as productsDL from '../DL/productsDL.js';
import Product  from '../models/product.js';

export function getProducts() {
    return productsDL.getProducts();
}

export function getProductById(id: number) {
    return productsDL.getProductById(id);
}

export function addProduct(product: Product) {
    productsDL.addProduct(product);
}

export function updateProduct(productId: number, product: Product) {
    productsDL.updateProduct(productId, product);
}

export function deleteProduct(productId: number) {
    productsDL.deleteProduct(productId);
}

export function increseProductQuantity(productId: number) {
    productsDL.increseProductQuantity(productId);
} 

export function decreseProductQuantity(productId: number) {
    productsDL.decreseProductQuantity(productId);
}